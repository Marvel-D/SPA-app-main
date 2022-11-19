import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-step2',
  templateUrl: './form-step2.component.html',
  styleUrls: ['./form-step2.component.css'],
})
export class FormStep2Component implements OnInit {
  signUp2 = this.fb.group({
    Gender: [
      '',
      {
        validators: [Validators.required],
      },
    ],
    Birthday: [],
    Age: [],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
