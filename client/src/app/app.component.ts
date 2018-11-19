import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  apiToggle: FormControl;
  apiToggleSubscription: Subscription;

  constructor(fb: FormBuilder, router: Router) {
    this.apiToggle = fb.control(false);
    this.apiToggleSubscription = this.apiToggle.valueChanges.subscribe(value => {
      if (value) {
        router.navigate(['/auth0']);
      } else {
        router.navigate(['/okta']);
      }
    });
  }

  ngOnDestroy() {
    this.apiToggleSubscription.unsubscribe();
  }
}
