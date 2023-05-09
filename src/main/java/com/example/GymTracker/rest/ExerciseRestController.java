package com.example.GymTracker.rest;

import com.example.GymTracker.entity.Exercise;
import com.example.GymTracker.service.exerciseService.ExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/exercises")
public class ExerciseRestController {
    private final ExerciseService exerciseService;

    @Autowired
    public ExerciseRestController(ExerciseService exerciseService) {
        this.exerciseService = exerciseService;
    }

    @GetMapping("/")
    public List<Exercise> getExercises(){
        return exerciseService.getExercises();
    }
}
