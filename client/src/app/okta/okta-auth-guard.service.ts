import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { OktaLoginService } from './okta-login.service';

@Injectable()
export class OktaAuthGuardService implements CanActivate {
  constructor(private oktaLogin: OktaLoginService, private router: Router) { }

  canActivate(_next: ActivatedRouteSnapshot, _state: RouterStateSnapshot): boolean {
    const idToken = this.oktaLogin.widget.tokenManager.get('idToken');
    if (!idToken) {
      this.router.navigate(['/okta/login']);
    }
    return !!idToken;
  }
}
