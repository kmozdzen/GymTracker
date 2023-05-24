package com.example.GymTracker.controller;

import com.example.GymTracker.entity.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class DefaultController {
    @GetMapping("/")
    public String home(){
        return "index";
    }

    @GetMapping("/login")
    public String login(){
        return "login";
    }

    @GetMapping("/register")
    public String register(){
        return "register";
    }
    @GetMapping("/workout")
    public String workout(){
        return "workout";
    }

    @GetMapping("/exercises")
    public String exercises(){
        return "exercises";
    }



}
