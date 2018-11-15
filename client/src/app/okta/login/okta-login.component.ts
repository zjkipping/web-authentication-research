import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';

import { OktaLoginService } from '../okta-login.service';

@Component({
  selector: 'app-okta-login',
  templateUrl: './okta-login.component.html',
  styleUrls: ['./okta-login.component.scss']
})
export class OktaLoginComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private zone: NgZone, private oktaLogin: OktaLoginService) { }

  ngOnInit() {
    this.oktaLogin.widget.renderEl({
      el: '#okta-signin-container'},
      (res) => {
        if (res.status === 'SUCCESS') {
          this.zone.run(() => {
            this.oktaLogin.widget.tokenManager.add('accessToken', res[1]);
            this.oktaLogin.widget.tokenManager.add('idToken', res[0]);
            this.oktaLogin.widget.remove();
            this.router.navigate(['/okta/landing']);
          });
        }
      },
      (err) => {
        throw err;
      }
    );
  }

  ngOnDestroy() {
    this.oktaLogin.widget.remove();
  }
}
