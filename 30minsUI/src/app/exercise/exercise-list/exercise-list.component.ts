import { Component, OnInit } from "@angular/core";
import { IExercise } from "../exercise";
import { ExerciseService } from "../exercise.service";

@Component({
    templateUrl: './exercise-list.component.html',
    styleUrls: ['./exercise-list.component.css']
})

export class ExerciseListComponent implements OnInit{
    exercises: IExercise[] = [];
    errorMessage: String = "";

    constructor(private exerciseService: ExerciseService) {}
    ngOnInit(): void {
        this.exerciseService.getExercises().subscribe({
            next: exercises => this.exercises = exercises,
            error: err => this.errorMessage = err
        });
    }
}