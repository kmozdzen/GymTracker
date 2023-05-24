package com.example.GymTracker.rest;

import com.example.GymTracker.entity.User;
import com.example.GymTracker.service.userService.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins= {"*"}, maxAge = 4800, allowCredentials = "false" )
@RequestMapping("/api")
public class UserRestController {
    private UserService userService;

    @Autowired
    public UserRestController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public List<User> getUsers(){
        return userService.getUsers();
    }
    @GetMapping("/users/{id}")
    public User getUser(@PathVariable("id") int id){
        return userService.getUser(id);
    }

    @PostMapping("/users")
    public User addUser(@RequestBody User user){
        user.setId(0);
        return userService.addUser(user);
    }

    @PutMapping("/users")
    public User updateUser(@RequestBody User user){
        return userService.updateUser(user);
    }

}
