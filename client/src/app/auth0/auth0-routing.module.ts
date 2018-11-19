import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Auth0Component } from './auth0.component';
import { Auth0HomeComponent } from './home/auth0-home.component';
import { Auth0ProtectedComponent } from './protected/auth0-protected.component';

const routes: Routes = [
  {
    path: '',
    component: Auth0Component,
    children: [
      { path: 'home', component: Auth0HomeComponent },
      { path: 'protected', component: Auth0ProtectedComponent },
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
