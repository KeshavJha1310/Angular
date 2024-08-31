import { Component, OnInit } from '@angular/core';
import { registerForm } from 'src/app/interfaces/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

form : registerForm = {
  email:'',
  password:'',
  comform_pass:''
}

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.form)
  }

}
