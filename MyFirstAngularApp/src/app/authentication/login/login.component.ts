import { Component, OnInit } from '@angular/core';
import { loginForm } from 'src/app/interfaces/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


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
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    if(this.isLoading) return;
    this.isLoading = true
    const auth = getAuth();
signInWithEmailAndPassword(auth, this.form.email, this.form.password)
  .then((userCredential) => {
    // Signed in 
    alert('logged in succuess')
    // const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert('Credentials does not matched!')
  }).finally(()=>(
    this.isLoading = false
  ))
    // console.log(this.form)
  }

}
