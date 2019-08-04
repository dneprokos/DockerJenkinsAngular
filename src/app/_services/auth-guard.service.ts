import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from './authService/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  canActivate() {
    let result = this.authService.isUserLogged();

    if (result) return true;

    this.router.navigate(["login"]);
    return false;
  }

  constructor(private authService: AuthServiceService, private router: Router) {

  }
}
