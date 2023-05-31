package com.example.GymTracker.service.workoutService;

import com.example.GymTracker.entity.Workout;
import com.example.GymTracker.webUser.WebWorkout;

import java.text.ParseException;
import java.util.Date;
import java.util.List;

public interface WorkoutService{
    public List<Workout> getWorkouts();

    List<Workout> getWorkoutsByDate(Date date);

    Workout addWorkout(WebWorkout workout) throws ParseException;

    Workout updateWorkout(WebWorkout webWorkout);

    List<Workout> getWorkoutsByEmail(String email);

    List<WebWorkout> getWorkoutsByDateAndEmail(Date date, String email);
}
