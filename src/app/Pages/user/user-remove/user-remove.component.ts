import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-remove',
  templateUrl: './user-remove.component.html',
  styleUrls: ['./user-remove.component.scss']
})
export class UserRemoveComponent implements OnInit {

  @Input() user;
  constructor(public modal: NgbActiveModal,
    public userService: UserService) { }

  ngOnInit() {
  }

  remove(){
    this.userService.remove(this.user);
    this.modal.close();
  }

}
