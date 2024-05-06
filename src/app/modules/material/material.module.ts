import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'

import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {MatFormFieldControl, MatFormFieldModule, MatLabel} from '@angular/material/form-field'
import {MatInput, MatInputModule} from '@angular/material/input'
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
@NgModule({
  declarations: [],
  imports: [
    MatSidenavModule,
    CommonModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggle,MatButtonToggleGroup,MatFormFieldModule, MatInputModule, MatCheckboxModule, MatDividerModule, MatSelectModule, MatLabel, ReactiveFormsModule, MatCardModule,MatStepperModule
  ],
  exports: [CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggle, MatButtonToggleGroup, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatDividerModule, MatSelectModule, MatLabel, ReactiveFormsModule,MatCardModule,MatStepperModule
  ]
})
export class MaterialModule { }
