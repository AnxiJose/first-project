
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { toggleSelectionShiftAnimation } from '../animations/button-toggle.animation';

import { MatButtonToggle } from '@angular/material/button-toggle';

@Component({
  selector: 'app-button-toggle',
  standalone: true,
  imports: [MaterialModule, FormsModule, ReactiveFormsModule,  ],
  templateUrl: './button-toggle.component.html',
  styleUrl: './button-toggle.component.scss',
  animations: [toggleSelectionShiftAnimation]
})
export class ButtonToggleComponent {
  @Input() buttonOptions: string[] = ["option1","option2","option3", "option4","option5","option6","option7","option8"];
  @Input()  selectedOption?: string;
  @Output() optionSelected = new EventEmitter<string>();
  buttonToggleControl = new FormControl();
  shiftValue?: number;

  constructor() {}

  ngOnChanges() {
    this.shiftValue = this.calculateShift();
  }

  calculateShift(): number {
    if (!this.selectedOption || !this.buttonOptions || this.buttonOptions.length === 0) {
      return 0;
    }
    const index = this.buttonOptions.indexOf(this.selectedOption);

    return index ==1? 101 : index *(102);
  }

  updateContent(option: string) {
    this.selectedOption = option;
    console.log('Selected option:', option);
    this.shiftValue = this.calculateShift();
    console.log(this.shiftValue)
    this.optionSelected.emit(option);
}}
