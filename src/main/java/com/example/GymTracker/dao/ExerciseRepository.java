package com.example.GymTracker.dao;

import com.example.GymTracker.entity.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExerciseRepository extends JpaRepository<Exercise, Integer> {
    public List<Exercise> findExercisesByMuscle(String muscle);
    public Exercise findExercisesByName(String name);
}
