import { Component } from '@angular/core';
import { Auth0Service } from './auth0.service';

@Component({ template: `` })
export class Auth0CallbackComponent {
  constructor(auth0: Auth0Service) {
    auth0.handleAuthentication();
  }
}
