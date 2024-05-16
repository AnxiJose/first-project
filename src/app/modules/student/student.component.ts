import { Component } from '@angular/core';
import { BasicFormComponent } from '../../shared/basic-form/basic-form.component';
import { CommonModule } from '@angular/common';
import { ButtonToggleComponent } from '../../shared/button-toggle/button-toggle.component';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [BasicFormComponent,ButtonToggleComponent,CommonModule,
    MaterialModule,],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
updateContent($event: string) {
throw new Error('Method not implemented.');
}
  logoSrc: any;

}
