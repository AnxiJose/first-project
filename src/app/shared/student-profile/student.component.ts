import { StudentHomeService } from '../../services/student-home/student-home.service';
import { Component, Input } from '@angular/core';
import { BasicFormComponent } from '../basic-form/basic-form.component';
import { CommonModule } from '@angular/common';
import { ButtonToggleComponent } from '../button-toggle/button-toggle.component';
import { MaterialModule } from '../material/material.module';
import { DDInputComponent } from "../ddinput/ddinput.component";
import { Router } from '@angular/router';
@Component({
    selector: 'app-student',
    standalone: true,
    templateUrl: './student.component.html',
    styleUrl: './student.component.scss',
    imports: [BasicFormComponent, ButtonToggleComponent, CommonModule,
        MaterialModule, DDInputComponent]
})
export class StudentComponent {

  @Input() data! : any
updateContent($event: string) {
throw new Error('Method not implemented.');
}
  logoSrc: string = 'assets/ico.png';

  constructor( private StudentsService: StudentHomeService , private router: Router){


  }
  piarRedirect() {
    this.router.navigate(['/piar']);
    }
  entornoRedirect() {
    this.router.navigate(['/entorno']);
    }
}
