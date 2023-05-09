package com.example.GymTracker.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
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

    @GetMapping("/profile")
    public String profile(){
        return "profile";
    }
}