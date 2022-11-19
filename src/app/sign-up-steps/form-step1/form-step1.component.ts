import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-step1',
  templateUrl: './form-step1.component.html',
  styleUrls: ['./form-step1.component.css'],
})
export class FormStep1Component implements OnInit {
  signUp = this.fb.group({
    firstName: [
      '',
      {
        validators: [Validators.required],
        updateOn: 'blur',
      },
    ],
    lastName: [
      '',
      {
        validators: [Validators.required],
        updateOn: 'blur',
      },
    ],
    email: [
      '',
      {
        validators: [Validators.required, Validators.email],
        updateOn: 'blur',
      },
    ],
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {}

  get firstName() {
    return this.signUp.controls['firstName'];
  }

  get lastName() {
    return this.signUp.controls['lastName'];
  }

  get email() {
    return this.signUp.controls['email'];
  }

  submitted: boolean = false;

  nextPage() {
    if (this.signUp.valid) {
      this.router.navigate(['sign-up/step2']);
    }

    this.submitted = true;
  }
}
