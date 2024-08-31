import { Component, OnInit } from '@angular/core';
import { registerForm } from 'src/app/interfaces/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { trigger } from '@angular/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';


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

passwordMatched:boolean = true;
isLoading:boolean = false;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  submit(){

    this.authService.register(this.form)
    // console.log(this.form)
  }

}
