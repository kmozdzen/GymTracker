package com.example.GymTracker.rest;

import com.example.GymTracker.entity.Exercise;
import com.example.GymTracker.service.exerciseService.ExerciseService;
import com.example.GymTracker.webUser.WebExercise;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/exercises")
public class ExerciseRestController {
    private ExerciseService exerciseService;

    @Autowired
    public ExerciseRestController(ExerciseService exerciseService) {
        this.exerciseService = exerciseService;
    }

    @GetMapping("/")
    public List<Exercise> getExercises(){
        return exerciseService.getExercises();
    }

    @PostMapping("/")
    public Exercise addExercise(@RequestBody Exercise exercise){
        return exerciseService.addExercise(exercise);
    }
}
