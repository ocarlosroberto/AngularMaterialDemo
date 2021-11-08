import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private api = 'https://api.github.com/users/ocarlosroberto/repos';

  constructor(private http: HttpClient) {

  }

  getRepoUser(): Observable<any> {
    return this.http.get(this.api, {
    }).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }
}
