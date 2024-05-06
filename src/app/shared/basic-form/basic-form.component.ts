import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormArrayName, FormsModule } from '@angular/forms';
import { FadeAnimation } from '../animations/fade.animation';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { SlideAnimation } from '../animations/slide.animation';
import { ListAnimation } from '../animations/list.animation';
import { FlexAnimation } from '../animations/flex.animation';
import { FormData } from '../FormData';


@Component({
  selector: 'app-basic-form',
  standalone: true,
  imports: [MaterialModule, FormsModule ],
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.scss',
  animations: [FadeAnimation, ListAnimation, SlideAnimation, FlexAnimation]
})
export class BasicFormComponent {

  @Input() dynamicForm!: FormGroup ;
  checkboxValue = false;
  @Input() formFieldType!:  FormData  ;
  formFieldValues: string[] = [''];
  constructor( private formBuilder:FormBuilder ){
     console.log('start',this.dynamicForm)
    this.dynamicForm.addControl( this.formFieldType.title,this.formBuilder.group({selection: this.formBuilder.control(''), checkboxValue: this.formBuilder.control(''),
      genericForm: this.formBuilder.array([this.formBuilder.control('') ]),
          }))
          console.log('end',this.dynamicForm)
          ;


  }

  get formArray( ): FormArray {
    return this.dynamicForm.get('genericForm') as FormArray;
  }

  addFormField() {
    // Add your logic here to handle adding a new form field\

    this.formArray.push(this.formBuilder.control(''));
  }
  removeFormField(index: number ) {
    this.formArray.removeAt(index)
  }
}
