import { Routes } from '@angular/router';
import { DashboardComponent } from './Pages/Features/dashboard/dashboard';
import { LoginComponent } from './Pages/Auth/login/login';
import { EmailverifyComponent } from './Pages/Auth/emailverify/emailverify';
import { ForgotpasswordComponent } from './Pages/Auth/forgotpassword/forgotpassword';
import { RegisterComponent } from './Pages/Auth/register/register';
import { ResetPasswordComponent } from './Pages/Auth/reset-password/reset-password';
import { TostepVerifyComponent } from './Pages/Auth/tostep-verify/tostep-verify';
import { MainlayoutComponent } from './Shared/mainlayout/mainlayout';
import { App } from './app';
import { ApplayoutComponent } from './Shared/applayout/applayout';

export const routes: Routes = [


 {
  path: 'app',
  component: ApplayoutComponent,
  children: [
    { path: 'dashboard', component: DashboardComponent }
  ]
},

  {
    path: '', 
    component: MainlayoutComponent,
    children: [
       { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotpasswordComponent },
  { path: 'email-verify', component: EmailverifyComponent },
  { path: 'tostep-verify', component: TostepVerifyComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
    ]
  },


];
