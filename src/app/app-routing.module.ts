import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';


import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { database } from 'firebase';
import { AuthGuard } from './shared/guard/auth.guard';




export const routes: Routes = [
  {path: '', redirectTo:'/sign-in', pathMatch: 'full'},

  {path: 'sign-in', component: SignInComponent,  },

  {path: 'register-user', component: SignUpComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]  },
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'verify-email-address', component: VerifyEmailComponent},
  {path: 'homepage', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
