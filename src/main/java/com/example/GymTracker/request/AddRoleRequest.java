package com.example.GymTracker.request;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class AddRoleRequest {
    private int id;
    private String role;
    private String message = "";
}

