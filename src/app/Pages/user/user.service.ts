import { Injectable } from '@angular/core';
import { UserApi } from './user.api';
import { UserState } from './user.state';
import { Observable } from 'rxjs';
import { User } from './user.model';
import swal from 'sweetalert2'

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

  get users$(): Observable<User[]> {
    return this.state.users$;
  }

  public async remove(user: User){

    const previousUser = this.state.getById(user.id);

    try {
      await this.api.remove(user.id);
      this.state.removeUser(user.id);
      swal.fire('Sucesso', 'Excluído!','success');
     } catch (error) {
       //alert(error.message);
       swal.fire('Erro', 'Não foi possivel excluir','error');
       this.state.addUser(previousUser);
     }
  }

  public async save(user: User) {

    if (user.id) {
      this.update(user);

    } else {
      this.add(user);
    }
  }

  private async update(user: User) {

    const previousUser = this.state.getById(user.id);
    this.state.update(user);
  
    try {
     await this.api.update(user.id,user);
     swal.fire('Sucesso', 'Alterado!','success');
    } catch (error) {
      swal.fire('Erro', 'Não foi possivel alterar','error');
      this.state.update(previousUser);
    }
  }

  private async add(user: User) {

    try {
     const userCreated = await this.api.create(user);
     this.state.addUser(userCreated);
     swal.fire('Sucesso', 'Adicionado!','success');
    } catch (error) {
      swal.fire('Erro', 'Não foi possivel criar','error');
      this.state.removeUser(user.id);
    }
  }

}




