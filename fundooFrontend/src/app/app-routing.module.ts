import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DialogboxComponent } from './components/dialogbox/dialogbox.component';
import { AddnoteComponent } from './components/addnote/addnote.component';
import { AuthGuardService } from './service/auth-guard.service';
import { NoteComponent } from './components/note/note.component';
 

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
    path: 'note',
    component:NoteComponent
  },
  {
    canActivate: [AuthGuardService],
    path:'dashboard',
    component:DashboardComponent,
    children: [
      {
          path: '',
         component: NoteComponent
      },
      {
         path: 'note',
         component: NoteComponent
      },

    ]
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
