import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormData } from '../../shared/FormData';
@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor(private http: HttpClient) { }

  // Method to fetch form field data from a file
  getFormData( path:string ): Observable<any[]> {
    return this.http.get<FormData[]>(path);
  }
}
