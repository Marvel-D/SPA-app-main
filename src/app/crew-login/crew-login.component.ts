import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailsAva } from '../mork-data/email-validator';

@Component({
  selector: 'app-crew-login',
  templateUrl: './crew-login.component.html',
  styleUrls: ['./crew-login.component.css'],
  standalone: true,
  imports: [CommonModule, InputTextModule, ButtonModule, ReactiveFormsModule],
})
export class CrewLoginComponent implements OnInit {
  errorStates: {
    error: boolean;
    message: string | null;
  } = {
    error: false,
    message: null,
  };
  login = this.fb.group({
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

  submitted: boolean = false;
  submit() {
    // if email is in list return success
    // else return error
    const logDetails = this.login.value;
    if (typeof logDetails.email === 'string') {
      const emailExist = emailsAva.includes(logDetails.email);
      return emailExist
        ? this.router.navigate(['/', 'destination'])
        : (this.errorStates = {
            error: true,
            message: `this email, ${logDetails.email}, don't exist in our database`,
          });
    }

    return this.router.navigate(['/', 'destination']);

    this.submitted = true;
  }

  reset() {
    this.login.reset();
    console.log(this.login.value);
  }
}
