import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserApi {

  private readonly apiBaseUrl = ' http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`${this.apiBaseUrl}/user`).toPromise();
  }

  create(user: User) {
    return this.http.post<User>(`${this.apiBaseUrl}/user`, user).toPromise();
  }

  remove(id: number) {
    return this.http.delete(`${this.apiBaseUrl}/user/${id}`).toPromise();
  }

  update(id: number, user: User) {
    return this.http.put<User>(`${this.apiBaseUrl}/user/${id}`, {user}).toPromise();
  }
}