import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OktaAuthModule } from '@okta/okta-angular';
import { OktaRoutingModule } from './okta-routing.module';
import { OktaComponent } from './okta.component';

import { oktaConfig } from '../../environments/environment';
import { OktaLoginComponent } from './login/okta-login.component';
import { OktaLandingComponent } from './landing/okta-landing.component';
import { OktaLoginService } from './okta-login.service';
import { OktaAuthGuardService } from './okta-auth-guard.service';

@NgModule({
  declarations: [
    OktaComponent,
    OktaLoginComponent,
    OktaLandingComponent
  ],
  imports: [
    CommonModule,
    OktaRoutingModule,
    OktaAuthModule.initAuth(oktaConfig)
  ],
  exports: [
    OktaComponent,
    OktaLoginComponent,
    OktaLandingComponent
  ],
  providers: [
    OktaLoginService,
    OktaAuthGuardService
  ]
})
export class OktaModule { }
