import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ddinput',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './ddinput.component.html',
  styleUrl: './ddinput.component.scss'
})
export class DDInputComponent {
  @Input() form!: FormControl
  }
