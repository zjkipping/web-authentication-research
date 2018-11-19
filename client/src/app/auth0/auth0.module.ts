import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { Auth0Component } from './auth0.component';
import { Auth0HomeComponent } from './home/auth0-home.component';
import { Auth0ProtectedComponent } from './protected/auth0-protected.component';
import { Auth0RoutingModule } from './auth0-routing.module';
import { TokenInterceptor } from './auth0-token.interceptor.service';
import { Auth0CallbackComponent } from './auth0-callback.component';

@NgModule({
  declarations: [
    Auth0Component,
    Auth0HomeComponent,
    Auth0ProtectedComponent,
    Auth0CallbackComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    Auth0RoutingModule,
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
export class Auth0Module { }
