import { Component } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({ template: `` })
export class OktaCallbackComponent {
  constructor(okta: OktaAuthService) {
    okta.handleAuthentication();
  }
}
