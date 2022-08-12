import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crew-login',
  templateUrl: './crew-login.component.html',
  styleUrls: ['./crew-login.component.css'],
  standalone: true,
  imports: [CommonModule, InputTextModule, ButtonModule, ReactiveFormsModule],
})
export class CrewLoginComponent implements OnInit {
  login = this.fb.group({
    name: [
      '',
      {
        validators: [Validators.required],
      },
    ],
    role: [
      '',
      {
        validators: [Validators.required],
      },
    ],
    email: [
      '',
      {
        validators: [Validators.required, Validators.email],
        updateOn: 'blur',
      },
    ],

    password: [
      '',
      {
        validators: [Validators.required],
      },
    ],
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {}

  goToSignUp() {
    this.router.navigate(['/', 'sign-up']);
  }

  get email() {
    return this.login.controls['email'];
  }

  submit() {
    const logDetails = this.login.value;
    console.log(logDetails);
    this.router.navigate(['/', 'destination']);
  }

  reset() {
    this.login.reset;
    console.log(this.login.value);
  }
}
