package com.example.GymTracker.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.SortComparator;

import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
@Table(name = "exercise")
public class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_exercise")
    private int idExercise;

    @Column(name = "name")
    private String name;

    @Column(name = "muscle")
    private String muscle;

    @Column(name = "equipment")
    private String equipment;

    @Column(name = "difficulty")
    private String difficulty;

    @Column(name = "instructions")
    private String instructions;

    @JsonBackReference
    @JsonIgnore
    @OneToMany(mappedBy = "exercise")
    private List<Workout> workouts;

}
