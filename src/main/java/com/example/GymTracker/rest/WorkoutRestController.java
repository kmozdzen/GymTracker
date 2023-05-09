package com.example.GymTracker.rest;

import com.example.GymTracker.entity.Workout;
import com.example.GymTracker.service.workoutService.WorkoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/workouts/")
public class WorkoutRestController {
    private final WorkoutService workoutService;

    @Autowired
    public WorkoutRestController(WorkoutService workoutService) {
        this.workoutService = workoutService;
    }

    @GetMapping("/")
    public List<Workout> getWorkouts(){
        return workoutService.getWorkouts();
    }
}
