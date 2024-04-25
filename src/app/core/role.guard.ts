import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { jwtDecode,  } from 'jwt-decode';
import { Loginjwt } from '../shared/loginjwt'
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class RoleGuard  {
  constructor(private router: Router, private jwtHelper: JwtHelperService) { }

  canActivate(
    route: ActivatedRouteSnapshot): boolean {

    const token = localStorage.getItem('token'); // Get the token from local storage

   if (token){
    const decodedToken = this.jwtHelper.decodeToken(token); // Decode the token
    return decodedToken.roles.includes (route.data['roles']? route.data['roles'][0] : '' )? true : false
  }
  this.router.navigate(['/']);
  return false
  }
}
