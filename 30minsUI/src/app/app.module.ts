import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExerciseListComponent } from './exercise/exercise-list/exercise-list.component';

import { AppComponent } from './app.component';
import { ExerciseFormComponent } from './exercise/exercise-form/exercise-form.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    ExerciseListComponent,
    ExerciseFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'exercise', component: ExerciseFormComponent },
      { path: 'performance', component: ExerciseListComponent },
      { path: '', redirectTo: 'exercise', pathMatch: 'full' },
      { path: '**', redirectTo: 'exercise', pathMatch: 'full' } //any other path instead of giving 404 we are redirecting
    ]),
    FormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
