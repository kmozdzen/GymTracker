package com.example.GymTracker.auth;


import com.example.GymTracker.dao.UserRepository;
import com.example.GymTracker.entity.User;
import com.example.GymTracker.message.LoginMessage;
import com.example.GymTracker.token.Token;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Optional;


@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "*")
public class AuthController {
    private final AuthService service;
    private final UserRepository userRepository;

    @Autowired
    public AuthController(AuthService service, UserRepository userRepository) {
        this.service = service;
        this.userRepository = userRepository;
    }

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(service.register(request));
    }
    @PostMapping("/authenticate")
    public LoginMessage authenticate(@RequestBody AuthRequest request) {
        User user = userRepository.findByEmail(request.getEmail());
        try
        {
            if(user != null){
                String token;
                if(!(token = service.authenticate(request).getAccessToken()).isEmpty())
                    return new LoginMessage("Login success", true, token, user.getEmail(), user.getName(), user.getSurname(), user.getRoles());
                else
                    return new LoginMessage("Login failed", false);
            }else
            {
                return new LoginMessage("Email not exits", false);
            }
        }catch (Exception ex){
            return new LoginMessage("Wrong email/password", false);
        }
    }

    @PostMapping("/refresh-token")
    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException {
        service.refreshToken(request, response);
    }

    @PostMapping("/logout")
    public String logout(@RequestBody TokenRequest request) {
        if(request.getToken() == null){
            return "Failed";
        }
        service.deleteByToken(request.getToken());
        return "Success";
    }

    @PostMapping("/isToken/{token}")
    public LoginMessage isToken(@PathVariable("token") String token) {
        Optional<Token> theToken = service.getByToken(token);
        try {
            String t = theToken.get().token;
        }catch (Exception exception){
            return new LoginMessage("not valid", false);
        }
        if (theToken.get().expired) {
            return new LoginMessage("not valid", false);
        }
        return new LoginMessage("valid", true);
    }
}
