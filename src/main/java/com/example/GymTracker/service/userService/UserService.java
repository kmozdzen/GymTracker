package com.example.GymTracker.service.userService;

import com.example.GymTracker.entity.User;

import java.util.List;

public interface UserService {
    List<User> getUsers();

    User addUser(User user);
}
