import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IPhenotype } from './list/list.model';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PwingeiService {

  private phenotypeListUrl = 'https://pwingei-backend.herokuapp.com/app/rest/wingei';
  constructor(private httpClient: HttpClient) { }

  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  getPhenotypeList(): Observable<IPhenotype[]> {
    console.log("service retrieving list");
    return this.httpClient.get<IPhenotype[]>(this.phenotypeListUrl + '/findAll')
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

getPhenotypeById(id: number): Observable<IPhenotype> {
  //template string uses `${id}`
  return this.httpClient.get<IPhenotype>(this.phenotypeListUrl + `${id}`)
  .pipe(
    tap(data => console.log(JSON.stringify(data))),
    catchError(this.handleError)
  );
}

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}