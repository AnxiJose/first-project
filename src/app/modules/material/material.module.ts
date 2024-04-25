import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'

import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [],
  imports: [
    MatSidenavModule,
    CommonModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggle,MatButtonToggleGroup,MatFormFieldModule, MatInputModule, MatCheckboxModule
  ],
  exports: [CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggle, MatButtonToggleGroup, MatFormFieldModule, MatInputModule, MatCheckboxModule
  ]
})
export class MaterialModule { }
