import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  @Input() user;
  @Input() title;
  form: FormGroup;

  constructor(public modal: NgbActiveModal,
    private formBuilder: FormBuilder,
    public userService: UserService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: [ this.user ? this.user.nome : null, Validators.required],
      sobrenome: [this.user ? this.user.sobrenome : null, Validators.required],
      email: [this.user ? this.user.email : null , [Validators.required, Validators.email]],
      escolaridade: [this.user ? this.user.escolaridade : null, Validators.required],
      dataNascimento: [this.user ? this.user.dataNascimento : null, [Validators.required,this.validaDataDeNascimento ]]
    });
  }

  validaDataDeNascimento(c: AbstractControl){
    
      return  new Date(c.value).getTime() < new Date(Date.now()).getTime() ? null : { datainvalida :true } ;
  }

  save(){
      this.userService.save({
      id: this.user ? this.user.id : null,
      nome: this.form.get('nome').value,
      sobrenome: this.form.get('sobrenome').value,
      email: this.form.get('email').value,
      escolaridade: parseInt(this.form.get('escolaridade').value) ,
      dataNascimento: this.form.get('dataNascimento').value
      });
      this.modal.close();
  }

  verificaValidTouched(field){
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  addCssError(field){
    return {
      'is-invalid' : this.verificaValidTouched(field)
     // 'invalid-feedback' : this.verificaValidTouched(field),
    }
  }

}
