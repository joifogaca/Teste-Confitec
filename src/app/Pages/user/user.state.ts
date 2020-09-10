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
    
    public getById(id: string): User {
        return this.users.find(u => u.id === id);
    }

}