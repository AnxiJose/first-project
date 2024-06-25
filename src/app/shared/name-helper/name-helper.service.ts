// name-helper.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NameHelperService {
  constructor() {}

  extractFirstAndLastNames(fullName: string): { firstName?: string; lastName?: string; middleNames: string, secondLastName?:string } {
    const nameParts = fullName.split(' ');

    const firstName = nameParts.shift(); // Remove the first name
    const secondLastName = nameParts.pop(); // Remove the last name
    const lastName = nameParts.pop();
    const middleNames = nameParts.join(' '); // Combine the remaining names

    return { firstName, lastName, secondLastName , middleNames };
  }
}
