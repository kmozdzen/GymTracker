package com.example.GymTracker.rest;

import com.example.GymTracker.request.AddRoleRequest;
import com.example.GymTracker.service.adminService.AdminService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@SecurityRequirement(name = "bearerAuth")
@RequestMapping(value = "api/admin", produces = MediaType.APPLICATION_JSON_VALUE)
public class AdminRestController {
    private AdminService adminService;

    @Autowired
    public AdminRestController(AdminService adminService) {
        this.adminService = adminService;
    }

    @PutMapping("/add-role")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public AddRoleRequest addRole(@RequestBody AddRoleRequest addRoleRequest){
        return adminService.addRole(addRoleRequest);
    }
}
