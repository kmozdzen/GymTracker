package com.example.GymTracker.service.adminService;

import com.example.GymTracker.request.AddRoleRequest;

public interface AdminService {
    public AddRoleRequest addRole(AddRoleRequest addRoleRequest);

    boolean isAdmin(String email);
}
