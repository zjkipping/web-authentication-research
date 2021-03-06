import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Auth0Component } from './auth0.component';
import { Auth0HomeComponent } from './home/auth0-home.component';
import { Auth0ProtectedComponent } from './protected/auth0-protected.component';
import { Auth0CallbackComponent } from './auth0-callback.component';
import { Auth0GuardService } from './auth0-guard.service';

const routes: Routes = [
  {
    path: '',
    component: Auth0Component,
    children: [
      { path: 'home', component: Auth0HomeComponent },
      { path: 'protected', component: Auth0ProtectedComponent, canActivate: [Auth0GuardService] },
      { path: 'callback', component: Auth0CallbackComponent },
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
export class Auth0RoutingModule { }
