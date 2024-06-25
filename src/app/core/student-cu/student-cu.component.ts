import { StudentHomeService } from '../../services/student-home/student-home.service';

import { Component, Input, input } from '@angular/core';
import { BasicFormComponent } from '../../shared/basic-form/basic-form.component';
import { CommonModule } from '@angular/common';
import { ButtonToggleComponent } from '../../shared/button-toggle/button-toggle.component';
import { MaterialModule } from '../../shared/material/material.module';
import { DDInputComponent } from "../../shared/ddinput/ddinput.component";
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NameHelperService } from '../../shared/name-helper/name-helper.service';
import { FormDataService } from '../../services/form-data-service/form-data.service';

@Component({
    selector: 'app-student-cu',
    standalone: true,
    templateUrl: './student-cu.component.html',
    styleUrl: './student-cu.component.scss',
    imports: [BasicFormComponent, ButtonToggleComponent, CommonModule,
        MaterialModule, DDInputComponent]
})
export class StudentCreateUpdateComponent {
updateContent($event: string) {
throw new Error('Method not implemented.');
}

  InitialForm: FormGroup= new FormGroup({period: new FormControl(''),full_name: new FormControl(''), age: new FormControl(''), grade_aspiration: new FormControl(''),additional_data: new FormControl('')})
  full_name: FormControl= new FormControl('')

    logoSrc: string = 'assets/ico.png';
    constructor( private StudentsService: StudentHomeService , private NameService: NameHelperService, private StudentService: StudentHomeService){


    }
    saveInitialData() {
      const name=this.NameService.extractFirstAndLastNames(this.full_name.value)
      this.InitialForm.addControl('name',new FormControl(name.firstName))
      this.InitialForm.addControl('second_name',new FormControl(name.middleNames?? ''))
      this.InitialForm.addControl('last_name',new FormControl(name.lastName ?? name.secondLastName))
      this.InitialForm.addControl('second_last_name',new FormControl(name.lastName? name.secondLastName : ''))
      console.log('this works' )
      this.StudentService.postStudent(this.InitialForm.value).subscribe((response=>{
        console.log('this finally works',response)
      }))

      }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
      this.StudentsService.getStudents().subscribe((response)=>{
        console.log('data',response)
      })
  }
}
