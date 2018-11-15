import { Injectable } from '@angular/core';
import * as OktaSignIn from '@okta/okta-signin-widget';

import { oktaConfig } from '../../environments/environment';

// only really want this available in the OktaModule
@Injectable()
export class OktaLoginService {
  public widget;

  constructor() {
    this.widget = new OktaSignIn({
      baseUrl: 'https://dev-204621.oktapreview.com',
      clientId: oktaConfig.clientId,
      redirectUri: oktaConfig.redirectUri,
      features: {
        rememberMe: true
      },
      authParams: {
        issuer: oktaConfig.issuer,
        responseType: ['id_token', 'token'],
        scopes: ['openid', 'email', 'profile']
      }
    });
  }
}
