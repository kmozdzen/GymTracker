package com.example.GymTracker.rest;

import com.example.GymTracker.entity.Workout;
import com.example.GymTracker.service.workoutService.WorkoutService;
import com.example.GymTracker.webUser.WebWorkout;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
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

    @GetMapping("/email/{email}")
    public List<Workout> getWorkoutsByEmail(@PathVariable String email){
        return workoutService.getWorkoutsByEmail(email);
    }

    @GetMapping("/{date}")
    public List<Workout> getWorkoutsByDate(@PathVariable("date") Date date){
        return workoutService.getWorkoutsByDate(date);
    }

    @GetMapping("/myWorkouts/{date}/{email}")
    public List<WebWorkout> getWorkoutsByDateAndEmail(@PathVariable("date") Date date, @PathVariable("email") String email){
        return workoutService.getWorkoutsByDateAndEmail(date, email);
    }

    @PostMapping("/")
    public Workout addWorkout(@RequestBody WebWorkout webWorkout ) throws ParseException {
        System.out.println(webWorkout);
        return workoutService.addWorkout(webWorkout);
    }

    @PutMapping("/")
    public Workout updateWorkout(@RequestBody WebWorkout webWorkout ){
        return workoutService.updateWorkout(webWorkout);
    }
}
