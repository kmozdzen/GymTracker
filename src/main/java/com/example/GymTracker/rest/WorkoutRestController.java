package com.example.GymTracker.rest;

import com.example.GymTracker.entity.Exercise;
import com.example.GymTracker.entity.Workout;
import com.example.GymTracker.service.exerciseService.ExerciseService;
import com.example.GymTracker.service.workoutService.WorkoutService;
import com.example.GymTracker.request.WebWorkout;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;
import java.sql.Date;

@RestController
@SecurityRequirement(name = "bearerAuth")
@CrossOrigin(origins= {"*"}, maxAge = 4800, allowCredentials = "false" )
@RequestMapping("/api/workouts")
public class WorkoutRestController {
    private WorkoutService workoutService;
    private ExerciseService exerciseService;

    @Autowired
    public WorkoutRestController(WorkoutService workoutService, ExerciseService exerciseService) {
        this.workoutService = workoutService;
        this.exerciseService = exerciseService;
    }

    @GetMapping("/")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public List<Workout> getWorkouts(){
        return workoutService.getWorkouts();
    }

    @GetMapping("/email/{email}")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public List<Workout> getWorkoutsByEmail(@PathVariable String email){
        return workoutService.getWorkoutsByEmail(email);
    }

    @GetMapping("/{date}")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public List<Workout> getWorkoutsByDate(@PathVariable("date") Date date){
        return workoutService.getWorkoutsByDate(date);
    }

    @GetMapping("/myWorkouts/{date}/{email}")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public List<WebWorkout> getWorkoutsByDateAndEmail(@PathVariable("date") Date date, @PathVariable("email") String email){
        return workoutService.getWorkoutsByDateAndEmail(date, email);
    }

    @PostMapping("/")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public Workout addWorkout(@RequestBody WebWorkout webWorkout ) throws ParseException {
        if(webWorkout.getExercise() == "") {
            List<Exercise> exercises = exerciseService.getExercises();
            webWorkout.setExercise(exercises.get(0).getName());
        }
        return workoutService.addWorkout(webWorkout);
    }

    @PutMapping("/")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public Workout updateWorkout(@RequestBody WebWorkout webWorkout ){
        if(webWorkout.getIdWorkout() == 0){
            List<Workout> workouts = workoutService.getWorkoutsByEmail(webWorkout.getEmail());
            webWorkout.setIdWorkout(workouts.get(0).getIdWorkout());
        }
        return workoutService.updateWorkout(webWorkout);
    }
}
