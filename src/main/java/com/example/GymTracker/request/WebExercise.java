package com.example.GymTracker.request;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class WebExercise {
    private String name;
    private String type;
    private String muscle;
    private String equipment;
    private String difficulty;
    private String instructions;
}

