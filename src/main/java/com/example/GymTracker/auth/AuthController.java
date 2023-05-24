package com.example.GymTracker.auth;


import com.example.GymTracker.dao.UserRepository;
import com.example.GymTracker.entity.User;
import com.example.GymTracker.message.LoginMessage;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;


@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "http://localhost:3000")
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
        if(user != null){
            if(!service.authenticate(request).getAccessToken().isEmpty())
                return new LoginMessage("Login success", true);
            else
                return new LoginMessage("Login failed", false);
        }else
        {
            return new LoginMessage("Email not exits", false);
        }
    }

    @PostMapping("/refresh-token")
    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException {
        service.refreshToken(request, response);
    }
}
