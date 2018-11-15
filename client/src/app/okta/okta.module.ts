import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OktaAuthModule } from '@okta/okta-angular';
import { OktaRoutingModule } from './okta-routing.module';
import { OktaComponent } from './okta.component';

import { oktaConfig } from '../../environments/environment';
import { SharedModule } from '../shared/shared.module';
import { OktaHomeComponent } from './home/okta-home.component';
import { OktaCallbackComponent } from './okta-callback.component';
import { OktaProtectedComponent } from './protected/okta-protected.component';

@NgModule({
  declarations: [
    OktaComponent,
    OktaHomeComponent,
    OktaProtectedComponent,
    OktaCallbackComponent
  ],
  imports: [
    CommonModule,
    OktaRoutingModule,
    OktaAuthModule.initAuth(oktaConfig),
    SharedModule
  ]
})
export class OktaModule { }
