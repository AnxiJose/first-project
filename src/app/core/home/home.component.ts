import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../shared/material/material.module';

import { ButtonToggleComponent } from '../../shared/button-toggle/button-toggle.component';

import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { NodePackageImporter } from 'sass';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    ButtonToggleComponent, FormsModule, ReactiveFormsModule,
],
})

export class HomeComponent {
  logoSrc: string = 'assets/ico.png'; // ! tells angular its guarenteed
  loginErrorMessage: string | null = null;
  selection: string = 'Saber mas' ;
  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  roles = new FormControl('', Validators.required);
  constructor(private authService: AuthService, private router: Router) {}
  updateContent(option: string){
    this.selection=option;
  }
  LoginButton(){
    this.authService.login(this.username.value ?? '' , this.password.value ?? '' ).subscribe({
      next: (response: any) => {
        ;

        if (response) {
          this.router.navigate(['/home/students']);
          console.log('API Response:', response)
        } else {
          this.loginErrorMessage = 'Login failed due to invalid credentials'
        }
      },
      error: (  error: any) => {
        console.error('API Error:', error);
        this.router.navigate(['/']);
      }})
  }
  SignupButton(){
    this.authService.signup(this.username.value ?? '' , this.password.value ?? '' , this.roles.value?? '').subscribe({
      next: (response: any) => {
        console.log('API Response:', response);

        if (response && response.success) {
                    this.router.navigate(['/students']);
        } else {
          this.loginErrorMessage = 'Login failed due to invalid credentials'
        }
      },
      error: (  error: any) => {
        console.error('API Error:', error);
        this.router.navigate(['/']);
      }})
  }
}
