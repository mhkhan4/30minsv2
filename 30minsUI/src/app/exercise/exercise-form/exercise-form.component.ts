import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/shared/popup/popup.component';
import { IExercise } from '../exercise';
import { ExerciseService } from '../exercise.service';

@Component({
  templateUrl: './exercise-form.component.html',
  styleUrls: ['./exercise-form.component.css']
})
export class ExerciseFormComponent implements OnInit{
  exercises: IExercise[] = [];

  constructor(private dialogRef: MatDialog) {}

  openDialog(){
    this.dialogRef.open(PopupComponent);
  }

  ngOnInit(): void {
    
  }

  addExercise(): void{
    //
  }



}