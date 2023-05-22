package com.example.GymTracker.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
@Table(name = "role")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_role")
    private int idRole;

    @Column(name = "name")
    private String name;

    @ManyToMany
    @JoinTable(
            name = "role_has_user",
            joinColumns = @JoinColumn(name = "role_id_role"),
            inverseJoinColumns = @JoinColumn(name = "user_id")

    )
    @JsonBackReference
    private List<User> users;
}
