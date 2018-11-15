import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { Observable, from } from 'rxjs';
import { tap, take } from 'rxjs/operators';

@Injectable()
export class OktaAuthGuardService implements CanActivate {
  constructor(private oktaAuth: OktaAuthService) { }

  canActivate(_next: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<boolean> {
    return from(this.oktaAuth.isAuthenticated()).pipe(
      take(1),
      tap(auth => {
        if (!auth) {
          this.oktaAuth.loginRedirect();
        }
      })
    );
  }
}
