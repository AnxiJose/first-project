
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { AbstractControl, AbstractControlOptions, FormArrayName, FormsModule, ValidationErrors, ValidatorFn } from '@angular/forms';
import { FadeAnimation } from '../animations/fade.animation';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { SlideAnimation } from '../animations/slide.animation';
import { ListAnimation } from '../animations/list.animation';
import { FlexAnimation } from '../animations/flex.animation';
import { FormData } from '../FormData';
import { AsFormArrayPipe } from "../asFormArray/asFormGroup.pipe";
import { MatDatepicker } from '@angular/material/datepicker';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {default as _rollupMoment} from 'moment';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
const moment = _rollupMoment || _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
    selector: 'app-environment-form',
    standalone: true,
    templateUrl: './basic-form.component.html',
    styleUrl: './basic-form.component.scss',
    animations: [FadeAnimation, ListAnimation, SlideAnimation, FlexAnimation],
    imports: [MaterialModule, FormsModule, AsFormArrayPipe],
    providers: [
      // Moment can be provided globally to your app by adding `provideMomentDateAdapter`
      // to your app config. We provide it at the component level here, due to limitations
      // of our example generation script.
      provideMomentDateAdapter(MY_FORMATS),
    ],
})
export class BasicFormComponent {

  @Input() dynamicForm!: FormGroup;// =new FormGroup({checkboxValue: this.formBuilder.control(''),genericForm:this.formBuilder.array([this.formBuilder.control('') ])});
  checkboxValue = false;
  picker!: MatDatepicker<Date> ;
  @Input() formFieldTypeBefore ?: FormData;
  @Input() formFieldType:  FormData  ={
    title: "Placeholder",
    checkButton: false,
    width: "50%",
    titleNest: "Placeholder",
    subtitle: '',
    optionalButton: false,
    selectOptions: [],
    type: '',
    text:true,
    database: ""
  } ;
  formFieldValues: string[] = [''];

  constructor( private formBuilder:FormBuilder ){




  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.\

    this.formFieldType.checkButton ? this.dynamicForm.addControl( this.formFieldType.database,this.formBuilder.array([this.formBuilder.control(false)])) : undefined;
    this.formFieldType.date ? this.dynamicForm.addControl( this.formFieldType.database,this.formBuilder.array([this.formBuilder.control(moment())])) : this.dynamicForm.addControl( this.formFieldType.database,this.formBuilder.array([this.formBuilder.control('')]))
  }
  atLeastOneFieldValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const group = control as FormGroup;
    const controls = group.controls;
    if (controls) {
      const theOne = Object.keys(controls).findIndex(key => controls[key].value !== '');
      if (theOne === -1) {
        return { atLeastOneRequired: { text: 'At least one should be selected' } };
      }
    }
    return null;
  };




  addFormField() {
    // Add your logic here to handle adding a new form field\
    console.log(this.dynamicForm);

    (this.dynamicForm.get(this.formFieldType.database) as FormArray).push(this.formBuilder.control(''));
  }
  removeFormField(index: number ) {
    (this.dynamicForm.get(this.formFieldType.database) as FormArray).removeAt(index)
  }
}
