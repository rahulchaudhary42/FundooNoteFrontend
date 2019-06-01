import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {



  firstName=new FormControl('',Validators.required);
  email=new FormControl('',[Validators.required,Validators.email]);
  mobileNumber=new FormControl('',[Validators.required]);
  password=new FormControl('',[Validators.required,Validators.minLength(6)])
   registerForm: FormGroup;
   constructor(private snackBar: MatSnackBar, public formBuilder: FormBuilder) { }
 
 firstNameError(){
   return this.firstName.hasError('required')?'You must enter a value':'';
 }
 emailError(){
   return this.email.hasError('required')?'You must enter a email':
   this.email.hasError('email')?'Enter a valid email':'';
 }
 mobileError(){
   return this.mobileNumber.hasError('required')?'You must enter mobile number':'';
 }
 passwordError(){
   return this.password.hasError('required')?'You must enter password':
   this.password.hasError('minlength')?'Password must be 6 characters long':'';
 }

 // constructor() { }

  ngOnInit() {
  }

}
