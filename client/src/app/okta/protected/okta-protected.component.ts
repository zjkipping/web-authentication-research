import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

const API_URL = environment.apiURL;

@Component({
  selector: 'app-okta-protected',
  templateUrl: './okta-protected.component.html',
  styleUrls: ['./okta-protected.component.scss']
})
export class OktaProtectedComponent {
  protectedData: Observable<any>;

  constructor(http: HttpClient) {
    this.protectedData = http.get(API_URL + '/okta');
  }
}
