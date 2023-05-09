package com.example.GymTracker.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
@Table(name = "workout")
public class Workout {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_workout")
    private int idWorkout;

    @Column(name = "reps")
    private int reps;

    @Column(name = "weight")
    private int weight;

    @Column(name = "date")
    private Date date;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user;

    @ManyToMany
    @JoinTable(
            name = "workout_has_exercise",
            joinColumns = @JoinColumn(name = "workout_id_workout"),
            inverseJoinColumns = @JoinColumn(name = "exercise_id_exercise")
    )
    @JsonManagedReference
    private List<Exercise> exercises;
}