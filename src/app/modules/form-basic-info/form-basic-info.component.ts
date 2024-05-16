import { FormData } from './../../shared/FormData';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
import { MatStepper, StepperOrientation } from '@angular/material/stepper';
import { AsFormGroupPipe } from "../../shared/asFormGroup/asFormGroup.pipe";
import { ApiService } from '../../services/api/api.service';
@Component({
    selector: 'app-form-basic-info',
    standalone: true,
    templateUrl: './form-basic-info.component.html',
    styleUrl: './form-basic-info.component.scss',
    imports: [MaterialModule, BasicFormComponent, ButtonToggleComponent, HttpClientModule, AsFormGroupPipe]
})
export class FormBasicInfoComponent implements OnInit {
  @ViewChild('stepper') private myStepper!: MatStepper;
  BasicInfoForm!: FormGroup ;
  logoSrc?: string;
  formFieldData: Array<[Array<FormData>, any]> = [];
  stepperOrientation!: Observable<StepperOrientation>;
  StudentData: any ='a';

  steps: [string, string][]=[['/assets/basicStudentInfo.json' , 'home']];
  constructor(private route: ActivatedRoute, private formDataService: FormDataService, private formBuilder:FormBuilder, breakpointObserver: BreakpointObserver, private http: HttpClient ,private apiService: ApiService){
    this.BasicInfoForm= this.formBuilder.group({
      })
      this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
      ;};

  ngOnInit(): void {
    const studentId = this.route.snapshot.params['id'];

    this.apiService.getData(`https://your-api-url.com/${studentId}`).subscribe({
      next: data => {
        this.StudentData=data

      },
      error:err => {
        console.error('There was an error!', err);
      }}
    );

    for (let [path,nameFormGroup] of this.steps  ) {

      this.BasicInfoForm.addControl(nameFormGroup, this.formBuilder.array([]))

      this.formDataService.getFormData(path).subscribe({next: data => {

        data.map( field=>{ this.getFormArray(nameFormGroup).push(this.formBuilder.group({}));  })
        this.StudentData.nameFormGroup ?  this.formFieldData.push([data,this.StudentData.nameFormGroup ]) : this.formFieldData.push([data, this.StudentData])
            //this.formFieldData[0] = [data,this.getFormGroup(nameFormGroup).controls];
            console.log('nameFormGroup',this.getFormGroup(nameFormGroup))
        }
        ,
      error: err=>{
        console.log ('There was an error: ',err);
        },

      });
      console.log (this.formFieldData[0][0])

    }


  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.myStepper.selectionChange.subscribe(event => {
      console.log(`The current step index is: ${event.selectedIndex}`);
    });
  }
  getFormArray (name :string){

    return this.BasicInfoForm.get(name) as FormArray ;
  }
  getFormGroup (name :string){
    return this.BasicInfoForm.get(name) as FormGroup ;
  }
  updateContent($event: string) {
    throw new Error('Method not implemented.');


}
  submitPage() {
    const formData = this.BasicInfoForm.value;
    console.log (formData)
    this.http.post('https://your-api-url.com', formData).subscribe({
         next: data => {
      console.log('Success!', data);
    },
    error: error => {
      console.error('Error!', error);
    }
  })}
  goBack(){
    const currentStepIndex = this.myStepper.selectedIndex;
    console.log(`The current step is: ${currentStepIndex}`);
  }
}
