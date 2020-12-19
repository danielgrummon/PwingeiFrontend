import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IPhenotype } from './list/list.model';


@Injectable({
  providedIn: 'root'
})
export class PwingeiService {

  // private productUrl = './assets/pwingei/pwingei.json';

  // constructor(private http: HttpClient) { }

  // getPhenotypes(): Observable<IPhenotype[]> {
  //   return this.http.get<IPhenotype[]>(this.productUrl)
  //     .pipe(
  //       tap(data => console.log('All: ' + JSON.stringify(data))),
  //       catchError(this.handleError)
  //     );
  // }

  // getPhenotype(id: number): Observable<IPhenotype | undefined> {
  //   return this.getPhenotypes()
  //     .pipe(
  //       map((phenotypes: IPhenotype[]) => phenotypes.find(p => p.id === id))
  //     );
  // }

  // private handleError(err: HttpErrorResponse): Observable<never> {
  //   let errorMessage = '';
  //   if (err.error instanceof ErrorEvent) {

  //     errorMessage = `An error occurred: ${err.error.message}`;
  //   } else {

  //     errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
  //   }
  //   console.error(errorMessage);
  //   return throwError(errorMessage);
  // }
}