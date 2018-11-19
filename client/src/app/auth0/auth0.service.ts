import { Injectable } from '@angular/core';
import * as auth0 from 'auth0-js';

import { auth0Config } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth0Service {
  auth0 = new auth0.WebAuth(auth0Config);

  constructor(private router: Router) { }

  login(): void {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err: any, authResult: any) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/auth0']);
      } else if (err) {
        this.router.navigate(['/auth0']);
        console.log(err);
      }
    });
  }

  getAccessToken(): string {
    return localStorage.getItem('access_token') || '';
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    const index = auth0Config.redirectUri.indexOf('/callback');
    const redirect = encodeURIComponent(auth0Config.redirectUri.slice(0, index));
    window.location.replace(`https://${auth0Config.domain}/v2/logout?returnTo=${redirect}&client_id=${auth0Config.clientID}`);
  }

  isAuthenticated() {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }

  private setSession(authResult: any) {
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }
}
