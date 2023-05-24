package com.example.GymTracker.controller;

import com.example.GymTracker.entity.User;
import com.example.GymTracker.service.userService.UserService;
import com.example.GymTracker.webUser.WebUser;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.StringTrimmerEditor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import java.util.logging.Logger;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    private UserService userService;
    private PasswordEncoder passwordEncoder;
    private Logger logger = Logger.getLogger(getClass().getName());

    @Autowired
    public UserController(UserService userService, PasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }
    @InitBinder
    public void initBinder(WebDataBinder dataBinder) {

        StringTrimmerEditor stringTrimmerEditor = new StringTrimmerEditor(true);

        dataBinder.registerCustomEditor(String.class, stringTrimmerEditor);
    }
    @GetMapping("/users/registerForm")
    public String register(Model model){
        WebUser webUser = new WebUser();
        model.addAttribute("webUser", webUser);
        return "register";
    }

    @PostMapping("/users/add")
    public String add(@Valid @ModelAttribute("webUser") WebUser webUser, BindingResult bindingResult, Model model, HttpSession session){

        String email = webUser.getEmail();
        logger.info("Processing registration form for: " + email);

        if (bindingResult.hasErrors()) {
            return "register";
        }

        User isUser = userService.getUserByEmail(email);

        if (isUser != null){
            model.addAttribute("webUser", new WebUser());
            model.addAttribute("registrationError", "Email already exists.");

            logger.warning("Email already exists.");
            return "register";
        }


        User user = new User();
        user.setEmail(webUser.getEmail());
        user.setPassword(webUser.getPassword());
        user.setName(webUser.getName());
        user.setSurname(webUser.getSurname());

        userService.addUser(user);

        logger.info("Successfully created user: " + email);

        session.setAttribute("user", user);

        return "confirmed-registration";
    }

    @GetMapping("/profile")
    public String profile(Model model, HttpServletRequest httpServletRequest){
        model.addAttribute("userData", userService.getUserByEmail(httpServletRequest.getUserPrincipal().getName()));
        return "profile";
    }


}
