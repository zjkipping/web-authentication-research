import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

const API_URL = environment.apiURL;

@Component({
  selector: 'app-auth0-protected',
  templateUrl: './auth0-protected.component.html',
  styleUrls: ['./auth0-protected.component.scss']
})
export class Auth0ProtectedComponent {
  protectedData: Observable<any>;

  constructor(http: HttpClient) {
    this.protectedData = http.get(API_URL + '/auth0');
  }
}
