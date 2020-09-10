import { Injectable } from '@angular/core';
import { UserApi } from './user.api';
import { UserState } from './user.state';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private api: UserApi,
    private state: UserState
  ) {
    this.loadAll();
   }

   async loadAll() {
    this.state.users = await this.api.getAll();
  }

  get users$():Observable<User[]>
  {
    return this.state.users$;
  }

  

}
