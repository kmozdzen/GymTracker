package com.example.GymTracker.webUser;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class WebWorkout {
    private int idWorkout;
    private String reps;
    private String weight;
    private String email;
    private String exercise;
}