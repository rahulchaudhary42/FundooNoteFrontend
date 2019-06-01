import { Component, OnInit } from '@angular/core';
//import { HttpService } from 'src/app/service/http-service'

import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
//import { UserModel } from 'src/app/model/user-model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 // user: UserModel = new UserModel();
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




  ngOnInit() {
    // this.registerForm = this.formBuilder.group(
    //   {
    //     'firstName': new FormControl(this.user.firstName, [Validators.required]),
    //     'lastName': new FormControl(this.user.lastName, [Validators.required]),
    //     'emailId': new FormControl(this.user.emailId, Validators.required),
    //     'password': new FormControl(this.user.password, [Validators.required, Validators.minLength(6)]),
    //     'mobileNumber': new FormControl(this.user.mobileNumber, [Validators.required])
    //   }
    // )

  }

  onRegister() {
    //console.log(this.user);
    console.log("Registration");
    //this.httpservice.postRequest('register', this.user).subscribe(
     
  }
}