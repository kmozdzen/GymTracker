package com.example.GymTracker.service.exerciseService;

import com.example.GymTracker.entity.Exercise;
import com.example.GymTracker.webUser.WebExercise;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ExerciseService {
    List<Exercise> getExercises();

    Exercise addExercise(Exercise exercise);


    List<Exercise> getExercisesByMuscle(String muscle);
}
