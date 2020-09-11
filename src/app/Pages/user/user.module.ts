import { NgModule } from '@angular/core';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './user.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRemoveComponent } from './user-remove/user-remove.component';


@NgModule({
  imports: [
    NgbModalModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
   
  ],
  declarations: [
    UserComponent,
    AddUserComponent,
    UserRemoveComponent,
  ],
  entryComponents: [AddUserComponent, 
    UserRemoveComponent
  ]
})
export class UserModule { }