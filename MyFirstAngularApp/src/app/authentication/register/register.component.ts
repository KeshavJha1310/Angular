import { Component, OnInit } from '@angular/core';
import { registerForm } from 'src/app/interfaces/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { trigger } from '@angular/animations';
import { ReactiveFormsModule } from '@angular/forms';


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

  constructor() { }

  ngOnInit(): void {
  }

  submit(){

    if(this.isLoading) return;
    this.isLoading = true;

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
  }).finally(()=>(this.isLoading = false))
    // console.log(this.form)
  }

}
