import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [],
  imports: [
    MatSidenavModule,
    CommonModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule
  ],
  exports: [
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
  ]
})
export class MaterialModule { }
