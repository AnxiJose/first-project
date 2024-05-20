import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataProcessingService {
  constructor() {}

  // Concatenates properties from an array of JSON objects
  combineProperties(jsonArray: any[]) {
    const combinedObject: { [key: string]: any } = {};

    jsonArray.forEach((jsonObj) => {
      for (const key in jsonObj) {
        if (jsonObj.hasOwnProperty(key)) {
          // Add or update properties dynamically
          combinedObject[key] = jsonObj[key];
        }
      }
    });

    return combinedObject;
  }


  }

