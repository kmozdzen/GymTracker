package com.example.GymTracker.service.workoutService;

import com.example.GymTracker.dao.ExerciseRepository;
import com.example.GymTracker.dao.UserRepository;
import com.example.GymTracker.dao.WorkoutRepository;
import com.example.GymTracker.entity.Exercise;
import com.example.GymTracker.entity.User;
import com.example.GymTracker.entity.Workout;
import com.example.GymTracker.request.WebWorkout;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class WorkoutServiceImpl implements WorkoutService{
    private WorkoutRepository workoutRepository;
    private final UserRepository userRepository;
    private final ExerciseRepository exerciseRepository;

    @Autowired
    public WorkoutServiceImpl(WorkoutRepository workoutRepository,
                              UserRepository userRepository,
                              ExerciseRepository exerciseRepository) {
        this.workoutRepository = workoutRepository;
        this.userRepository = userRepository;
        this.exerciseRepository = exerciseRepository;
    }

    @Override
    public List<Workout> getWorkouts() {
        return workoutRepository.findAll();
    }

    @Override
    public List<Workout> getWorkoutsByDate(Date date) {
        return workoutRepository.getWorkoutsByDate(date);
    }

    @Override
    public Workout addWorkout(WebWorkout webWorkout) {
        Workout workout = new Workout();

        LocalDate localDate = LocalDate.now();
        Date date = Date.from(localDate.atStartOfDay(ZoneId.systemDefault()).toInstant());
        workout.setDate(date);

        workout.setReps(Integer.parseInt(webWorkout.getReps()));
        workout.setWeight(Integer.parseInt(webWorkout.getWeight()));

        User user = userRepository.findByEmail(webWorkout.getEmail());
        Exercise exercise = exerciseRepository.findExercisesByName(webWorkout.getExercise());

        workout.setUser(user);
        workout.setExercise(exercise);
        return workoutRepository.save(workout);
    }

    @Override
    @Transactional
    public Workout updateWorkout(WebWorkout webWorkout) {
        System.out.println(webWorkout.getIdWorkout());
        Workout workout = workoutRepository.findById(webWorkout.getIdWorkout()).orElseThrow();
        workout.setReps(Integer.parseInt(webWorkout.getReps()));
        workout.setWeight(Integer.parseInt(webWorkout.getWeight()));
        return workoutRepository.save(workout);
    }

    @Override
    public List<Workout> getWorkoutsByEmail(String email) {
        User user = userRepository.findByEmail(email);
        return workoutRepository.getWorkoutsByUser(user);
    }

    @Override
    public List<WebWorkout> getWorkoutsByDateAndEmail(Date date, String email) {
        User user = userRepository.findByEmail(email);
        List<Workout> workouts = workoutRepository.getWorkoutsByDateAndUserOrderByExercise(date, user);
        List<WebWorkout> webWorkouts = new ArrayList<>();
        for(Workout w : workouts){
            WebWorkout webWorkout = new WebWorkout();
            webWorkout.setIdWorkout(w.getIdWorkout());
            webWorkout.setExercise(w.getExercise().getName());
            webWorkout.setReps(Integer.toString(w.getReps()));
            webWorkout.setWeight(Integer.toString(w.getWeight()));
            webWorkouts.add(webWorkout);
        }
        return webWorkouts;
    }
}
