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
import { JwtHelperService } from '@auth0/angular-jwt';
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
  roleToggleData: Array<any> = ["Estudiantes","Perfil", "Estadisticas"]
  constructor(private StudentService:StudentHomeService, private jwtHelper:JwtHelperService) {

  }
  ngOnInit(): void {

    const token = localStorage.getItem('authToken'); // Get the token from local storage

    if (token){
     const decoded = this.jwtHelper.decodeToken(token); // Decode the token
     console.log(decoded.roles)
     decoded.roles === 'teacher'
  ? (this.roleToggleData = ['Estudiantes', 'Perfil', 'Equipo'])
  : (this.roleToggleData = ['Estudiante', 'Entorno', 'Piar']);

   }

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.StudentService.getStudents().subscribe((response )=>{

      const {users, censUsers}=response
    users.forEach((element: any) => {
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
