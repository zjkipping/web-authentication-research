import { Component } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-okta',
  templateUrl: './okta.component.html',
  styleUrls: ['./okta.component.scss']
})
export class OktaComponent {
  isAuthenticated: boolean;

  constructor(private oktaAuth: OktaAuthService, private router: Router) { }

  async logout() {
    await this.oktaAuth.logout();
    this.router.navigate(['/okta/login']);
  }
}
