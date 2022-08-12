import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TooltipModule,
    DialogModule,
    ButtonModule,
    NavbarComponent,
  ],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  modalQuestion = false;

  showModalQuestion() {
    this.modalQuestion = !this.modalQuestion;
  }

  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/', 'crew-login']);
  }

  goToSignUp() {
    this.router.navigate(['/', 'sign-up']);
  }

  ngOnInit(): void {}
}
