package com.exercise.model;

import jakarta.persistence.*;
import lombok.Data;

import static jakarta.persistence.GenerationType.SEQUENCE;

@Data
@Entity
public class Exercise {

    @Id
    @SequenceGenerator(
            name = "exerciseListId_squence",
            sequenceName = "exerciseListId_squence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = SEQUENCE,
            generator = "exerciseListId_squence"
    )
    private long id;

    private String name;
    private int reps;
    private int sets;
}
