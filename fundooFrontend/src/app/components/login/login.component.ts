import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/model/login-model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: LoginModel = new LoginModel();
  loginForm: FormGroup;
  token: string;
  userInfo: any;
  socialLogin :boolean;
  constructor(private snackBar: MatSnackBar,
    private httpservice: HttpService,
    private formBuilder: FormBuilder,
    private router: Router,
   ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group(
      {
        'email': new FormControl(this.user.email, [Validators.required]),
        'password': new FormControl(this.user.password, [Validators.required, Validators.minLength(6)])
      }
    )
   
  }

  onLogin() {
    console.log("Login");
    console.log(this.user.email);
    this.token = localStorage.getItem('token');
    this.httpservice.postRequest("login", this.user).subscribe(
      (response: any) => {
        if (response.statusCode === 1) {
          console.log(response);
          localStorage.setItem('token', response.token);
          localStorage.setItem('email', this.user.email);
          localStorage.setItem('userName' , response.userName);
          this.snackBar.open(response.statusMessage, "close", { duration: 2500 })
          this.router.navigate(['/dashboard']);
          
        } else {
          console.log(response);
          this.snackBar.open(response.statusMessage, "close", { duration: 2500 })
        }
      }
    )
  }


   
}
