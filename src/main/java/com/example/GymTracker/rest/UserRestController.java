package com.example.GymTracker.rest;

import com.example.GymTracker.entity.User;
import com.example.GymTracker.service.userService.UserService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.annotation.security.RolesAllowed;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@SecurityRequirement(name = "bearerAuth")
@CrossOrigin(origins= "*")
@RequestMapping("/api/users")
public class UserRestController {
    private UserService userService;

    @Autowired
    public UserRestController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public List<User> getUsers(){
        return userService.getUsers();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public User getUser(@PathVariable("id") int id){
        return userService.getUser(id);
    }

    @GetMapping("/email/{email}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public User getUserByEmail(@PathVariable("email") String email){
        return userService.getUserByEmail(email);
    }
    @PostMapping("/")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public User addUser(@RequestBody User user){
        user.setId(0);
        return userService.addUser(user);
    }

    @PutMapping("/")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public User updateUser(@RequestBody User user){
        return userService.updateUser(user);
    }

}
