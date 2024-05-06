import { FormData } from './../../shared/FormData';
import { Component, Input, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { BasicFormComponent } from '../../shared/basic-form/basic-form.component';
import { ButtonToggleComponent } from '../../shared/button-toggle/button-toggle.component';
import { ActivatedRoute } from '@angular/router';
import { addAriaReferencedId } from '@angular/cdk/a11y';
import { FormDataService } from '../../services/form-data-service/form-data.service';
import {BreakpointObserver} from '@angular/cdk/layout';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { error } from 'pdf-lib';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { StepperOrientation } from '@angular/material/stepper';
import { AsFormGroupPipe } from '../../shared/asFormGroup/asFormGroup.pipe';
import { AsFormArrayPipe } from '../../shared/asFormArray/asFormGroup.pipe';
@Component({
  selector: 'app-form-basic-info',
  standalone: true,
  imports: [MaterialModule,BasicFormComponent, ButtonToggleComponent,HttpClientModule,AsFormGroupPipe,AsFormArrayPipe ],
  templateUrl: './form-basic-info.component.html',
  styleUrl: './form-basic-info.component.scss'
})
export class FormBasicInfoComponent implements OnInit {
  BasicInfoForm!: FormGroup ;
  logoSrc?: string;
  formFieldData: Array<FormData[]> = [];
  stepperOrientation!: Observable<StepperOrientation>;

  constructor(private route: ActivatedRoute, private formDataService: FormDataService, private formBuilder:FormBuilder, breakpointObserver: BreakpointObserver, ){
    this.BasicInfoForm= this.formBuilder.group({
      firstFormArray: this.formBuilder.array([]),

      })
      this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
      ;};

  ngOnInit(): void {
    const studentId = this.route.snapshot.params['id'];
    const steps: [string, string][]=[['/assets/basicStudentInfo.json' , 'firstFormGroup']];

    for (let [path,nameFormGroup] of steps  ) {
      let i=0;

      this.formDataService.getFormData(path).subscribe({next: data => {
        data.map( field=>{ this.firstFormArray.push(this.formBuilder.group({}));  })
            //this.formFieldData[0] = [data,this.getFormGroup(nameFormGroup).controls];
            this.formFieldData.push(data)

            console.log(this.firstFormArray.controls)
        }

        ,
      error: err=>{
        console.log ('There was an error: ',err);
        },
        complete:()=>{

      },

      });

      i=i+1
    }

  }

  get firstFormArray (){

    return this.BasicInfoForm.get('firstFormArray') as FormArray ;
  }

  updateContent($event: string) {
    throw new Error('Method not implemented.');


}
}
function complete(error: any): void {
  throw new Error('Function not implemented.');
}

