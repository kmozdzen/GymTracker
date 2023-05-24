package com.example.GymTracker.rest;

import com.example.GymTracker.entity.Workout;
import com.example.GymTracker.service.workoutService.WorkoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.sql.Date;

@RestController
@CrossOrigin(origins= {"*"}, maxAge = 4800, allowCredentials = "false" )
@RequestMapping("/api/workouts")
public class WorkoutRestController {
    private WorkoutService workoutService;

    @Autowired
    public WorkoutRestController(WorkoutService workoutService) {
        this.workoutService = workoutService;
    }

    @GetMapping("/")
    public List<Workout> getWorkouts(){
        return workoutService.getWorkouts();
    }

    @GetMapping("/{date}")
    public List<Workout> getWorkoutsByDate(@PathVariable("date") Date date){
        return workoutService.getWorkoutsByDate(date);
    }
}
