import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root', // Make the service available globally
})
export class StudentHomeService {
  constructor(private http: HttpClient) {}

  // Define your methods for making HTTP requests here
  getStudents(): Observable<any> {
    const url = `${environment.apiUrl}/students`; // Replace with your API endpoint
    return this.http.get(url);
  }
  postStudent(body:any): Observable<any>{
    const url = `${environment.apiUrl}/students/`;
    return this.http.post(url,body);

  }
}
