import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

@Pipe({
  name: 'asFormArray',
  standalone: true,
})
export class AsFormArrayPipe implements PipeTransform {


    transform(value: AbstractControl): FormArray {

      return value as FormArray;
    }


}
