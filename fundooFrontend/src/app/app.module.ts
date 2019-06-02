import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {CdkTableModule} from '@angular/cdk/table';
import {MatToolbarModule} from '@angular/material/toolbar';
 

import { MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from "@angular/flex-layout";

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
 

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';


@NgModule(
  {
    declarations: [
      AppComponent,
   
      RegisterComponent,
   
      LoginComponent,
   
      ForgotpasswordComponent,
   
      ResetpasswordComponent,
   
      DashboardComponent,
     
    ],


    imports: [
      BrowserModule,
      AppRoutingModule,
      MatFormFieldModule,
      CdkTableModule,
      MatInputModule,
      MatRadioModule,
      MatToolbarModule,
      
      MatIconModule,
      MatButtonModule,
      MatProgressSpinnerModule,
      BrowserAnimationsModule,
      MatDividerModule,
      MatCardModule,
      FormsModule,
      MatMenuModule,
      FlexLayoutModule,
      MatAutocompleteModule,
      ReactiveFormsModule,
      MatButtonToggleModule,
      HttpClientModule,
      MatSnackBarModule,
    
      MatChipsModule
    ],

    providers: [],
    bootstrap: [AppComponent]
  })
export class AppModule { }
