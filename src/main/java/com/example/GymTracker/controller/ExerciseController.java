package com.example.GymTracker.controller;

import com.example.GymTracker.service.exerciseService.ExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/exercises")
public class ExerciseController {
    private ExerciseService exerciseService;
    @Autowired
    public ExerciseController(ExerciseService exerciseService) {
        this.exerciseService = exerciseService;
    }

    @GetMapping("/{muscle}")
    public String getExercisesByMuscle(@PathVariable String muscle, Model model){
        model.addAttribute("exercises", exerciseService.getExercisesByMuscle(muscle));
        return "exercises";
    }
}
