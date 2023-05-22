package com.example.GymTracker.webUser;

import jakarta.persistence.Entity;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

public class WebUser {
    @NotNull(message="Please enter an email")
    @Size(min = 4, message = "Use min 4 characters")
    private String email;

    @NotNull(message="Please enter an password")
    @Size(min = 4, message = "Use min 4 characters")
    private String password;

    @NotNull(message="Please enter an name")
    @Size(min = 4, message = "Use min 4 characters")
    private String name;

    @NotNull(message="Please enter an surname")
    @Size(min = 4, message = "Use min 4 characters")
    private String surname;

    public WebUser(){}

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }
}
