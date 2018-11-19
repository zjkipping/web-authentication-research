import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-auth0',
  templateUrl: './auth0.component.html',
  styleUrls: ['./auth0.component.scss']
})
export class Auth0Component implements OnDestroy {
  authenticated: Subject<boolean> = new Subject();
  // authSubscription: Subscription;

  constructor( private router: Router) {
    // this.authSubscription = this.oktaAuth.$authenticationState.subscribe(auth => this.authenticated.next(auth));
    this.getInitialAuth();
  }

  ngOnDestroy() {
    // this.authSubscription.unsubscribe();
  }

  async getInitialAuth() {
    // this.authenticated.next(await this.oktaAuth.isAuthenticated());
  }

  async logout() {
    // await this.oktaAuth.logout();
    this.router.navigate(['/auth0/home']);
  }

  home() {
    this.router.navigate(['/auth0/home']);
  }

  protected() {
    this.router.navigate(['/auth0/protected']);
  }

  login() {
    // this.oktaAuth.loginRedirect();
  }
}
