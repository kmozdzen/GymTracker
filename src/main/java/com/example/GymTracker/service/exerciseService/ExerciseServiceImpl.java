package com.example.GymTracker.service.exerciseService;

import com.example.GymTracker.dao.ExerciseRepository;
import com.example.GymTracker.entity.Exercise;
import com.example.GymTracker.service.exerciseService.ExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExerciseServiceImpl implements ExerciseService {
    private final ExerciseRepository exerciseRepository;

    @Autowired
    public ExerciseServiceImpl(ExerciseRepository exerciseRepository) {
        this.exerciseRepository = exerciseRepository;
    }

    @Override
    public List<Exercise> getExercises() {
        return exerciseRepository.findAll();
    }
}
