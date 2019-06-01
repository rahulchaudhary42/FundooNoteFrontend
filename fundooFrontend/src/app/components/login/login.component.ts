import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  firstName=new FormControl('',Validators.required);
  email=new FormControl('',[Validators.required,Validators.email]);
  mobileNumber=new FormControl('',[Validators.required]);
  password=new FormControl('',[Validators.required,Validators.minLength(6)])
   registerForm: FormGroup;
   constructor(private snackBar: MatSnackBar, public formBuilder: FormBuilder) { }
 
 
 emailError(){
   return this.email.hasError('required')?'You must enter a email':
   this.email.hasError('email')?'Enter a valid email':'';
 }
 
 passwordError(){
   return this.password.hasError('required')?'You must enter password':
   this.password.hasError('minlength')?'Password must be 6 characters long':'';
 }

  //constructor() { }

  ngOnInit() {
  }

}
