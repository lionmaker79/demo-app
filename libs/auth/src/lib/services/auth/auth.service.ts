import { Injectable } from '@angular/core';
import { Authenticate, User } from '@demo-app/data-models';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly httpClient: HttpClient) {}

  login(authenticate: Authenticate): Observable<User> {
    return this.httpClient.post<User>('http://localhost:3000/login', authenticate);
  }
}