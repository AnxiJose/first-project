import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root', // Make the service available globally
})
export class StudentEnvService {
  constructor(private http: HttpClient) {}

  // Define your methods for making HTTP requests here
  getEnv( id: number ): Observable<any> {
    const url = `${environment.apiUrl}/students/${id}/environment`; // Replace with your API endpoint
    return this.http.get(url);
  }
  postEnv(id: number ,body:any): Observable<any>{
    const url = `${environment.apiUrl}/students/${id}/environment`;
    return this.http.post(url,body);

  }
}
