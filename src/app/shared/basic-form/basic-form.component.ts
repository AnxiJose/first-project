
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
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


@Component({
    selector: 'app-basic-form',
    standalone: true,
    templateUrl: './basic-form.component.html',
    styleUrl: './basic-form.component.scss',
    animations: [FadeAnimation, ListAnimation, SlideAnimation, FlexAnimation],
    imports: [MaterialModule, FormsModule, AsFormArrayPipe],
    providers: [
  ]
})
export class BasicFormComponent {

  @Input() dynamicForm!: FormGroup;// =new FormGroup({checkboxValue: this.formBuilder.control(''),genericForm:this.formBuilder.array([this.formBuilder.control('') ])});
  checkboxValue = false;
  picker!: MatDatepicker<Date> ;

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
    const group = this.formBuilder.group({})
    if (this.formFieldType.checkButton) {
      group.addControl('checkboxValue', this.formBuilder.control(''));
    }
    if (this.formFieldType.selectOptions && this.formFieldType.selectOptions.length>0) {
      group.addControl('selection', this.formBuilder.control(''));
    }
    if (!this.formFieldType.text) {
      group.addControl('genericForm', this.formBuilder.array([this.formBuilder.control('')]));
    }

    this.dynamicForm.addControl( this.formFieldType.database,group);

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
