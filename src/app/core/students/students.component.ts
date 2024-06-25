import { Component } from '@angular/core';
import { ButtonToggleComponent } from '../../shared/button-toggle/button-toggle.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';
import { BasicFormComponent } from '../../shared/basic-form/basic-form.component';
import { toggleSelectionShiftAnimation } from '../../shared/animations/button-toggle.animation';
import { StudentComponent } from '../../shared/student-profile/student.component';
import { StudentHomeService } from '../../services/student-home/student-home.service';
import { tokenGetter } from '../../shared/getToken.helper';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [ButtonToggleComponent,CommonModule,
    MaterialModule, StudentComponent
    ],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',

})
export class StudentsComponent {
  arrayStudents: Array<any>=[]
  constructor(private StudentService:StudentHomeService) {

  }
  ngOnInit(): void {

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.StudentService.getStudents().subscribe((response )=>{

     response.forEach((element: any) => {
      this.arrayStudents.push(element)
     });
  console.log(this.arrayStudents)
    })

  }
updateContent($event: string) {
throw new Error('Method not implemented.');
}
  logoSrc: string = 'assets/ico.png';

}
