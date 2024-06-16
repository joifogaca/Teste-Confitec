import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { ResponseUser } from './response.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApi {

  private readonly apiBaseUrl = ' https://mocki.io/v1/d648f0aa-59d7-4b39-8053-fb9fd65a277b';

  constructor(private http: HttpClient) { }

  getAll():Observable<User[]> {
    return this.http.get<ResponseUser>(`${this.apiBaseUrl}`)
    .pipe(
      map(response => response.user)
    );}

  create(user: User) {
    return this.http.post<User>(`${this.apiBaseUrl}`, user).toPromise();
  }

  remove(id: number) {
    return this.http.delete(`${this.apiBaseUrl}${id}`).toPromise();
  }

  update(id: number, user: User) {
    return this.http.put<User>(`${this.apiBaseUrl}/${id}`, {user}).toPromise();
  }
}
