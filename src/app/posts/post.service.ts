import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Post } from '../posts/post-model';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

import { catchError, retry } from 'rxjs/operators';
@Injectable()
export class PostService {

  endPoint = 'https://jsonplaceholder.typicode.com/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(
    private http: HttpClient
  ) { }

  getData(): Observable<any> {
    return this.http.get<Post>(`${this.endPoint}posts`)
      .pipe(
        retry(3) // retry a failed request up to 3 times
      );
  }

  
}
