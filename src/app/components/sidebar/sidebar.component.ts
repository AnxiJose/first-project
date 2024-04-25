import { Component, ViewChild } from '@angular/core';
import {MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MaterialModule } from '../../modules/material/material.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
 
  imports: [MatSidenavModule, MaterialModule ],
  
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  toggleSidebar(): void{
    this.sidenav.toggle();
  }

}
