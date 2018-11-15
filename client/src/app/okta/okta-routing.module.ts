import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { OktaComponent } from './okta.component';
import { OktaHomeComponent } from './home/okta-home.component';
import { OktaCallbackComponent } from './okta-callback.component';
import { OktaAuthGuard } from '@okta/okta-angular';
import { OktaProtectedComponent } from './protected/okta-protected.component';

const routes: Routes = [
  {
    path: '',
    component: OktaComponent,
    children: [
      { path: 'home', component: OktaHomeComponent },
      { path: 'protected', component: OktaProtectedComponent, canActivate: [OktaAuthGuard] },
      { path: 'callback', component: OktaCallbackComponent },
      { path: '**', redirectTo: 'home' }
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
