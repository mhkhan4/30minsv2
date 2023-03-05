import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError, tap } from "rxjs";
import { IExercise } from "./exercise";

@Injectable({
    providedIn: 'root'
})
export class ExerciseService{

    private exerciseUrl = 'http://localhost:8080/api/exerciseList';

    constructor(private http: HttpClient){}

    getExercises(): Observable<IExercise[]> {
        return this.http.get<IExercise[]>(this.exerciseUrl).pipe(
            tap(data => console.log('All', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if(err.error instanceof ErrorEvent) {
            errorMessage = `An error occured: ${err.error.message}`
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`
        }
        console.error(errorMessage);
        return throwError(()=>errorMessage);
    }
    
}