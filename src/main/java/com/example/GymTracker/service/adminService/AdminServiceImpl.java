package com.example.GymTracker.service.adminService;

import com.example.GymTracker.dao.RoleRepository;
import com.example.GymTracker.dao.UserRepository;
import com.example.GymTracker.entity.Role;
import com.example.GymTracker.entity.User;
import com.example.GymTracker.request.AddRoleRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class AdminServiceImpl implements AdminService{
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    @Autowired
    public AdminServiceImpl(UserRepository userRepository,
                            RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    @Override
    @Transactional
    public AddRoleRequest addRole(AddRoleRequest addRoleRequest) {
        User user = userRepository.findById(addRoleRequest.getId()).orElseThrow();
        Role role = roleRepository.findByName(addRoleRequest.getRole());

        List<Role> roles = user.getRoles();
        roles.add(role);
        user.setRoles(roles);

        List<User> users = role.getUsers();
        users.add(user);
        role.setUsers(users);

        return addRoleRequest;
    }
}

