import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-basic-form',
  standalone: true,
  imports: [MaterialModule,],
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.scss'
})
export class BasicFormComponent {
  @Input() formTitle!: string;
  @Input() showOptionalButton!: boolean;
  @Input() formFieldType!: string;
}
