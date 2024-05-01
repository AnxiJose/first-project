import { Component } from '@angular/core';
import { BasicFormComponent } from '../../shared/basic-form/basic-form.component';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [BasicFormComponent],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {

}
