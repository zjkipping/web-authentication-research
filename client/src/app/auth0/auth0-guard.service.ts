import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Auth0Service } from './auth0.service';

@Injectable({
  providedIn: 'root'
})
export class Auth0GuardService implements CanActivate {
  constructor(private auth0: Auth0Service) { }

  canActivate(_next: ActivatedRouteSnapshot, _state: RouterStateSnapshot): boolean {
    const authState = this.auth0.isAuthenticated();
      if (!authState) {
        this.auth0.login();
      }
      return authState;
  }
}
