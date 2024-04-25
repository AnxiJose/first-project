import { Component } from '@angular/core';
import { ButtonToggleComponent } from '../../shared/button-toggle/button-toggle.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { BasicFormComponent } from '../../shared/basic-form/basic-form.component';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [ButtonToggleComponent,CommonModule,
    MaterialModule,
    ButtonToggleComponent, FormsModule, ReactiveFormsModule,BasicFormComponent],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
updateContent($event: string) {
throw new Error('Method not implemented.');
}
  logoSrc!: string;

}
