import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './containers/login/login.component';
import { AuthService } from './services/auth/auth.service';
import { MaterialModule } from '@demo-app/material';
import { ReactiveFormsModule } from '@angular/forms';

export const authRoutes: Route[] = [
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule, MaterialModule, ReactiveFormsModule],
  declarations: [LoginComponent, LoginFormComponent],
  providers: [AuthService],
})
export class AuthModule {}
