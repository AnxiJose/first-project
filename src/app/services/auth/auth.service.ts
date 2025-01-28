import { HttpClient, withFetch } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { jwtDecode } from 'jwt-decode';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl=`${environment.apiUrl}/auth`
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }
  login (username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, {username,password}).pipe(
    tap(response =>{
      if (response && response.token){
        this.saveAuthToken(response.token);

      }
    }))
  }
  signup(username: string, password: string, roles: string){
    return this.http.post<any>(`${this.baseUrl}/signup`, {username,password,roles}).pipe(
      tap(response =>{
        if (response && response.token){
          this.saveAuthToken(response.token);

        }
      }))
  }
  logout(): void{
    this.clearAuthToken()
  }
  hasTokenExpired(): boolean{
    const token=this.getAuthToken();
    if (!token){
      return true;
    }
    return this.jwtHelper.isTokenExpired(token)
  }

  private saveAuthToken(token: string): void{
    localStorage.setItem('authToken',token);
  }
  private getAuthToken(): string | null {
    return localStorage.getItem('authToken');
  }
  isAuthenticated(): boolean{
    return !!this.getAuthToken();
  }
  private clearAuthToken(): void{
    localStorage.removeItem('authToken');
  }
}
