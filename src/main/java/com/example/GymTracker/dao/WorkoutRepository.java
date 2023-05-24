package com.example.GymTracker.dao;

import com.example.GymTracker.entity.Workout;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface WorkoutRepository extends JpaRepository<Workout, Integer> {
    public List<Workout> getWorkoutsByDate(Date date);
}
