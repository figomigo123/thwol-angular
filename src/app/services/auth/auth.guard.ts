import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthService,
    private router: Router) { } 
    
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
   /* return this.authService.isAuthenticated().pipe(map((response) => {
        if (response) {
            return true;
        }
        this.router.navigate(['']);
        return false;
    }), catchError((error) => {
        this.router.navigate(['']);
        return of(false);
    }));
    */
    return of(true);
}
}
