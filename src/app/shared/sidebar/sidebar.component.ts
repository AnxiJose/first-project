import { Component, ViewChild } from '@angular/core';
import {MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MaterialModule } from '../../modules/material/material.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,

  imports: [MatSidenavModule, MaterialModule,RouterModule ],

  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  toggleSidebar(): void{
    this.sidenav.toggle();
  }

}
