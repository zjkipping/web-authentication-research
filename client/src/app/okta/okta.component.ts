import { Component, OnDestroy } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-okta',
  templateUrl: './okta.component.html',
  styleUrls: ['./okta.component.scss']
})
export class OktaComponent implements OnDestroy {
  authenticated: Subject<boolean> = new Subject();
  authSubscription: Subscription;

  constructor(private oktaAuth: OktaAuthService, private router: Router) {
    this.authSubscription = this.oktaAuth.$authenticationState.subscribe(auth => this.authenticated.next(auth));
    this.getInitialAuth();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  async getInitialAuth() {
    this.authenticated.next(await this.oktaAuth.isAuthenticated());
  }

  async logout() {
    await this.oktaAuth.logout();
    this.router.navigate(['/okta/home']);
  }

  home() {
    this.router.navigate(['/okta/home']);
  }

  protected() {
    this.router.navigate(['/okta/protected']);
  }

  login() {
    this.oktaAuth.loginRedirect();
  }
}
