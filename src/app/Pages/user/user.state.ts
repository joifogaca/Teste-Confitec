import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserState {

    private readonly _users = new BehaviorSubject<User[]>([]);

    public get users$(): Observable<User[]> {
        return this._users.asObservable();
    }

    set users(val: User[]) {
        this._users.next(val);
    }

    get users(): User[] {
        return this._users.getValue();
      }
    
    public getById(id: number): User {
        return this.users.find(u => u.id === id);
    }

    public update(userUpdated: User) {
        const user = this.getById(userUpdated.id);
    
        if (user) {
          const index = this.users.indexOf(user);
    
          this.users[index] = userUpdated;
    
          this.users = [...this.users];
        }
      }

      public addUser(user: User) {
        const currentValue = this.users;
        this.users = [ ...currentValue, user ];
      }

      public removeUser(id: number) {
        this.users = this.users.filter(u => u.id !== id);
      }

}