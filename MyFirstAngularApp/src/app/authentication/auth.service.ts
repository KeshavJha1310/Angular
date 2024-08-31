import { Injectable } from '@angular/core';
import { loginForm, registerForm } from '../interfaces/auth';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoading:boolean=false;
  passwordMatched:boolean = true;
  isAuthenticated:boolean = false

login(form:loginForm){
  if(this.isLoading) return;
    this.isLoading = true
    const auth = getAuth();
signInWithEmailAndPassword(auth, form.email, form.password)
  .then((userCredential) => {
    // Signed in 
    this.isAuthenticated = true
    alert('logged in succuess')
    // const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    this.isAuthenticated = false
    alert('Credentials does not matched!')
  }).finally(()=>(
    this.isLoading = false
  ))
}


register(form:registerForm){

  if(this.isLoading) return;
  this.isLoading = true;

if(form.password != form.comform_pass){
this.passwordMatched = false
return;
}
const auth = getAuth();
createUserWithEmailAndPassword(auth, form.email, form.password)
.then((userCredential) => {
  console.log(userCredential)
  // Signed up 
  this.isAuthenticated = true
  const user = userCredential.user;
  // ...
})
.catch((error) => {
  this.isAuthenticated = false
  const errorCode = error.code;
  const errorMessage = error.message;
  // ..
}).finally(()=>(this.isLoading = false))
}

}
