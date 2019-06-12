import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {CdkTableModule} from '@angular/cdk/table';
import {MatToolbarModule} from '@angular/material/toolbar';
 
import {MatSidenavModule} from '@angular/material/sidenav';

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
 
import {MatListModule} from '@angular/material/list';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogboxComponent } from './components/dialogbox/dialogbox.component';
import { AddnoteComponent } from './components/addnote/addnote.component';
import { NoteComponent } from './components/note/note.component';
import { LabelDialogboxComponent } from './components/label-dialogbox/label-dialogbox.component';
 



@NgModule(
  {
    declarations: [
      AppComponent,
   
      RegisterComponent,
   
      LoginComponent,
   
      ForgotpasswordComponent,
   
      ResetpasswordComponent,
   
      DashboardComponent,
   
      DialogboxComponent,
   
      AddnoteComponent,
   
      NoteComponent,
   
      LabelDialogboxComponent
   
       

     
    ],


    imports: [
      BrowserModule,
      AppRoutingModule,
      MatFormFieldModule,
      MatSidenavModule,
      MatDialogModule,
      MatListModule,
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
    bootstrap: [AppComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    entryComponents: [LabelDialogboxComponent]
  })
export class AppModule { }