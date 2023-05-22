package com.example.GymTracker.service.exerciseService;

import com.example.GymTracker.dao.ExerciseRepository;
import com.example.GymTracker.entity.Exercise;
import com.example.GymTracker.webUser.WebExercise;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class ExerciseServiceImpl implements ExerciseService {
    private ExerciseRepository exerciseRepository;

    @Value("${api.key}")
    private String apiKey;
    @Autowired
    public ExerciseServiceImpl(ExerciseRepository exerciseRepository) {
        this.exerciseRepository = exerciseRepository;
    }

    @Override
    public List<Exercise> getExercises() {
        return exerciseRepository.findAll();
    }

    @Override
    public Exercise addExercise(Exercise exercise) {
        return exerciseRepository.save(exercise);
    }

    @Override
    public List<Exercise> getExercisesByMuscle(String muscle) {
        return exerciseRepository.findExercisesByMuscle(muscle);
    }


}
