import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { FadeAnimation } from '../animations/fade.animation';

import { SlideAnimation } from '../animations/slide.animation';
import { ListAnimation } from '../animations/list.animation';
import { FlexAnimation } from '../animations/flex.animation';


@Component({
  selector: 'app-basic-form',
  standalone: true,
  imports: [MaterialModule, FormsModule ],
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.scss',
  animations: [FadeAnimation, ListAnimation, SlideAnimation, FlexAnimation]
})
export class BasicFormComponent {
  @Input() formTitle?: string;
  @Input() showOptionalButton!: boolean;
  @Input() formFieldType: string = 'a';
  formFieldValues: string[] = [''];
  addFormField() {
    // Add your logic here to handle adding a new form field\
    this.formFieldValues.push('a');
  }
}
