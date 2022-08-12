import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
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
  ngOnInit(): void {}
}
