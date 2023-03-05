import { Component, OnInit } from '@angular/core';
import { IExercise } from '../exercise';
import { ExerciseService } from '../exercise.service';

@Component({
  templateUrl: './exercise-form.component.html',
  styleUrls: ['./exercise-form.component.css']
})
export class ExerciseFormComponent implements OnInit{
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
