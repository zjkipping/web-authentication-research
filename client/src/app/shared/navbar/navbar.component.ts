import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() auth = false;
  @Input() home = '';
  @Input() protected = '';
  @Output() login = new EventEmitter();
  @Output() logout = new EventEmitter();

  constructor(public router: Router) {
  }
}
