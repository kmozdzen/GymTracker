package com.example.GymTracker.service.userService;

import com.example.GymTracker.dao.UserRepository;

import com.example.GymTracker.entity.User;
import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.nio.CharBuffer;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;
    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public User addUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User getUser(int id) {
        return userRepository.findById(id).orElseThrow();
    }

    @Transactional
    @Override
    public User updateUser(User user) {
        User foundUser = getUser(user.getId());
        foundUser.setName(user.getName());
        addUser(foundUser);
        return foundUser;
    }

    @Override
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

}
