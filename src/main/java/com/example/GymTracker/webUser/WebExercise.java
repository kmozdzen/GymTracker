package com.example.GymTracker.webUser;

import com.example.GymTracker.entity.Workout;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;
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

