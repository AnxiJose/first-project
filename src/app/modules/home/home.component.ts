import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MaterialModule } from '../material/material.module';

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
  @Input() logoSrc!: string; // ! tells angular its guarenteed
  loginErrorMessage: string | null = null;
  selection: string = 'Saber mas' ;
  usernameControl = new FormControl('', Validators.required);
  passwordControl = new FormControl('', Validators.required);
  constructor(private authService: AuthService, private router: Router) {}
  updateContent(option: string){
    this.selection=option;
  }
  onButtonClick(){
    this.authService.login(this.usernameControl.value ?? '' , this.passwordControl.value ?? '' ).subscribe({
      next: (response: any) => {
        console.log('API Response:', response);

        // Navigate based on the response
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
