import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DialogboxComponent } from './components/dialogbox/dialogbox.component';
import { AddnoteComponent } from './components/addnote/addnote.component';
 

const routes: Routes = [
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'forgotpassword',
    component:ForgotpasswordComponent
  },
  {
    path: 'user/resetpassword/:token',
    component:ResetpasswordComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'dialogbox',
    component:DialogboxComponent
  },
  {
    path:'addnote',
    component:AddnoteComponent
  }

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
