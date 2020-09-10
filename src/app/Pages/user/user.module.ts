import { NgModule } from '@angular/core';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './user.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  imports: [
    NgbModalModule,
    CommonModule,
    HttpClientModule
   
  ],
  declarations: [
    UserComponent,
    AddUserComponent,
  ],
  entryComponents: [AddUserComponent]
})
export class UserModule { }