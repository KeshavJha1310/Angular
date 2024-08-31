import { Component, OnInit } from '@angular/core';
import { registerForm } from 'src/app/interfaces/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { trigger } from '@angular/animations';


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

  constructor() { }

  ngOnInit(): void {
  }

  submit(){

if(this.form.password != this.form.comform_pass){
  this.passwordMatched = false
  return;
}

const auth = getAuth();
createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
  .then((userCredential) => {
    console.log(userCredential)
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    // console.log(this.form)
  }

}
