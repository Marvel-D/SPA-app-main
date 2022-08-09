import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SPA-app-main';

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/', 'home']);
  }

  goToDestination() {
    this.router.navigate(['/', 'destination']);
  }

  goToCrew() {
    this.router.navigate(['/', 'crew']);
  }
}
