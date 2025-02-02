import { DataProcessingService } from '../../services/data-processing/data-processing.service';
import { FormData } from '../../shared/FormData';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from '../../shared/material/material.module';
import { BasicFormComponent } from '../../shared/basic-form/basic-form.component';
import { ButtonToggleComponent } from '../../shared/button-toggle/button-toggle.component';
import { ActivatedRoute } from '@angular/router';
import { addAriaReferencedId } from '@angular/cdk/a11y';
import { FormDataService } from '../../services/form-data-service/form-data.service';
import {BreakpointObserver} from '@angular/cdk/layout';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { error } from 'pdf-lib';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { MatStepper, StepperOrientation } from '@angular/material/stepper';
import { AsFormGroupPipe } from "../../shared/asFormGroup/asFormGroup.pipe";
import { ApiService } from '../../services/api/api.service';
import { environment } from '../../../environment/environment';
import { StudentEnvService } from '../../services/student-env/student-env.service';
@Component({
    selector: 'app-environment-form',
    standalone: true,
    templateUrl: './environment-form.component.html',
    styleUrl: './environment-form.component.scss',
    imports: [MaterialModule, BasicFormComponent, ButtonToggleComponent,
 AsFormGroupPipe]
})
export class EnvironmentFormComponent implements OnInit {
  @ViewChild('stepper') private myStepper!: MatStepper;
  BasicInfoForm!: FormGroup ;
  logoSrc?: string;
  formFieldData: Array<[Array<FormData>, any]> = [];
  stepperOrientation!: Observable<StepperOrientation>;
  StudentData: any ;
  studentId: number = -1;
  steps: [string[], string][]=[[[] , 'students'],[['guardian_env','parents'], 'home_env'], [['health_therapy'], 'health_env'],[[],'ed_env'  ],[['activities','recommendations'],'others']];
  constructor(private route: ActivatedRoute, private formDataService: FormDataService, private formBuilder:FormBuilder,
    breakpointObserver: BreakpointObserver, private http: HttpClient ,private apiService: StudentEnvService, private dataService: DataProcessingService
   ){
    this.BasicInfoForm= this.formBuilder.group({
      })
      this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
      ;};

  ngOnInit(): void {
    this.studentId = this.route.snapshot.params['id'];

    this.apiService.getEnv(this.studentId).subscribe({
      next: (data: any) => {
        this.StudentData=data

      },
      error:(err: any) => {
        console.error('Not authorized | no data,', err);
      }}
    );
    //console.log('cold',this.StudentData)

    for (let [path,nameFormGroup] of this.steps  ) {
      let i=0;
      this.BasicInfoForm.addControl(nameFormGroup, this.formBuilder.array([]))

      this.formDataService.getFormData(`/assets/${nameFormGroup}.json`).subscribe({next: data => {

        data.map( field=>{ this.getFormArray(nameFormGroup).push(this.formBuilder.group({}));  })
        //this.StudentData.nameFormGroup ?  this.formFieldData.push([data,this.StudentData.nameFormGroup ]) : this.formFieldData.push([data, this.StudentData])
        this.formFieldData.push([data, this.formBuilder.control('')])
            //this.formFieldData[0] = [data,this.getFormGroup(nameFormGroup).controls];
            console.log('nameFormGroup',this.getFormGroup(nameFormGroup))
        }
        ,
      error: err=>{
        console.log ('There was an error: ',err);
        },

      });


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

    const formData = this.dataService.combineProperties(this.BasicInfoForm.value[this.steps[this.myStepper.selectedIndex][1]]);

    console.log(formData)
    this.http.put(`${environment.apiUrl}/students/${this.studentId}/environment/update`, formData, {headers:{'model':this.steps[this.myStepper.selectedIndex][1], 'nested': this.steps[this.myStepper.selectedIndex][0] }}).subscribe({
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
