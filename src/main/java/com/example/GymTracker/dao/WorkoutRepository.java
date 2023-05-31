package com.example.GymTracker.dao;

import com.example.GymTracker.entity.User;
import com.example.GymTracker.entity.Workout;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

public interface WorkoutRepository extends JpaRepository<Workout, Integer> {
    public List<Workout> getWorkoutsByDate(Date date);
    public List<Workout> getWorkoutsByUser(User user);
    public List<Workout> getWorkoutsByDateAndUserOrderByExercise(Date date, User user);

    @Query(value = """
    SELECT w.reps, w.weight, e.name FROM Workout w
    JOIN Exercise e ON e.idExercise = w.exercise.idExercise
    WHERE w.date = :date AND w.user = :user
    """)
    public List<Workout> workoutsByDateAndUser(Date date, User user);
}
