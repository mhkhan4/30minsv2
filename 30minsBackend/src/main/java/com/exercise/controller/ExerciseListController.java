package com.exercise.controller;

import com.exercise.model.Exercise;
import com.exercise.repository.ExerciseRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/exerciseList")
@CrossOrigin("*")
public class ExerciseListController{

    @Autowired
    private ExerciseRepository exerciseRepository;

    @GetMapping
    public List<Exercise> fetchExerciseList() {
        return exerciseRepository.findAll();
    }

    @PostMapping
    public Exercise saveExercise(@Valid @RequestBody Exercise exercise) {
        return exerciseRepository.save(exercise);
    }
}
