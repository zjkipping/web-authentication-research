import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Auth0Service } from './auth0.service';

@Component({
  selector: 'app-auth0',
  templateUrl: './auth0.component.html',
  styleUrls: ['./auth0.component.scss']
})
export class Auth0Component {
  authenticated: Subject<boolean> = new Subject();

  constructor(public auth0: Auth0Service, private router: Router) {
  }

  async logout() {
    this.auth0.logout();
  }

  home() {
    this.router.navigate(['/auth0/home']);
  }

  protected() {
    this.router.navigate(['/auth0/protected']);
  }

  login() {
    this.auth0.login();
  }
}
