import { Component } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-okta-protected',
  templateUrl: './okta-protected.component.html',
  styleUrls: ['./okta-protected.component.scss']
})
export class OktaProtectedComponent {
  constructor(oktaAuth: OktaAuthService) { }
}
