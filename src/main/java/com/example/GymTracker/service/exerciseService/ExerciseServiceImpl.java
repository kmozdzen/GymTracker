package com.example.GymTracker.service.exerciseService;

import com.example.GymTracker.dao.ExerciseRepository;
import com.example.GymTracker.entity.Exercise;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class ExerciseServiceImpl implements ExerciseService {
    private ExerciseRepository exerciseRepository;

    @Autowired
    public ExerciseServiceImpl(ExerciseRepository exerciseRepository) {
        this.exerciseRepository = exerciseRepository;
    }

    @Override
    public List<Exercise> getExercises() {
        List<Exercise> exercises = exerciseRepository.findAll();
        Collections.sort(exercises,
                (exercise1, exercise2) ->
                        exercise1.getName().compareTo(exercise2.getName()));
        return exercises;
    }

    @Override
    public Exercise addExercise(Exercise exercise) {
        return exerciseRepository.save(exercise);
    }

    @Override
    public List<Exercise> getExercisesByMuscle(String muscle) {
        return exerciseRepository.findExercisesByMuscle(muscle);
    }

    @Override
    public List<Exercise> getExercise(String muscle) {
        return exerciseRepository.findExercisesByMuscle(muscle);
    }

    @Override
    public void deleteExercise(int id) {
         exerciseRepository.deleteById(id);
    }


}
