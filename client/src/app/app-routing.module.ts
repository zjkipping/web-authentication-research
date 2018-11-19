import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'okta', loadChildren: './okta/okta.module#OktaModule' },
  { path: 'auth0', loadChildren: './auth0/auth0.module#Auth0Module' },
  { path: '**', redirectTo: 'okta' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
