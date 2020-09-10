import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UserService } from './user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddUserComponent } from './add-user/add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {

  constructor(public userService: UserService,
    private modalService: NgbModal
    ) { }

  ngOnInit() {
    
  }

  public incluir(){
    const modalRef = this.modalService.open(AddUserComponent);
    //alert('altera');
   // modalRef.componentInstance.name = 'World';
  }

  public alterar(){
    alert('altera');
  }

  public excluir(){
    alert('exclui');
  }

}
