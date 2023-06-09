package com.example.GymTracker.service.exerciseService;

import com.example.GymTracker.entity.Exercise;

import java.util.List;

public interface ExerciseService {
    List<Exercise> getExercises();

    Exercise addExercise(Exercise exercise);


    List<Exercise> getExercisesByMuscle(String muscle);

    List<Exercise> getExercise(String muscle);

    void deleteExercise(int id);
}
