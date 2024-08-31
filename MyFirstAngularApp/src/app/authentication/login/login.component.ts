import { Component, OnInit } from '@angular/core';
import { loginForm } from 'src/app/interfaces/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
[x: string]: any;
form : loginForm = {
email: '',
password: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.form)
  }

}
