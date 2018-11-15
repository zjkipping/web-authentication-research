import { Component } from '@angular/core';
import { OktaLoginService } from '../okta-login.service';

@Component({
  selector: 'app-okta-landing',
  templateUrl: './okta-landing.component.html',
  styleUrls: ['./okta-landing.component.scss']
})
export class OktaLandingComponent {
  constructor(oktaLogin: OktaLoginService) {
    console.log('access: ', oktaLogin.widget.tokenManager.get('accessToken'));
    console.log('id: ', oktaLogin.widget.tokenManager.get('idToken'));
  }
}
