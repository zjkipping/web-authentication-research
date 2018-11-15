import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { OktaComponent } from './okta.component';
import { OktaLoginComponent } from './login/okta-login.component';
import { OktaLandingComponent } from './landing/okta-landing.component';
import { OktaAuthGuardService } from './okta-auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: OktaComponent,
    children: [
      { path: 'login', component: OktaLoginComponent },
      { path: 'landing', component: OktaLandingComponent, canActivate: [OktaAuthGuardService] },
      { path: '**', redirectTo: 'landing' }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class OktaRoutingModule { }
