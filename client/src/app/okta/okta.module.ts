import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OktaAuthModule } from '@okta/okta-angular';

import { oktaConfig } from '../../environments/environment';
import { OktaRoutingModule } from './okta-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OktaComponent } from './okta.component';
import { OktaHomeComponent } from './home/okta-home.component';
import { OktaCallbackComponent } from './okta-callback.component';
import { OktaProtectedComponent } from './protected/okta-protected.component';
import { TokenInterceptor } from './okta-token-interceptor.service';

@NgModule({
  declarations: [
    OktaComponent,
    OktaHomeComponent,
    OktaProtectedComponent,
    OktaCallbackComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    OktaRoutingModule,
    OktaAuthModule.initAuth(oktaConfig),
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class OktaModule { }
