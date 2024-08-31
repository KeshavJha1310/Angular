import { Component, OnInit } from '@angular/core';
import { loginForm } from 'src/app/interfaces/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';


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
  isLoading:boolean=false;
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  submit(){

    this.authService.login(this.form)
  
    // console.log(this.form)
  }

}
