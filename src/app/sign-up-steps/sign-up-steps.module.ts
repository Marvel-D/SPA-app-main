import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormStep1Component } from './form-step1/form-step1.component';
import { FormStep2Component } from './form-step2/form-step2.component';
import { FormStep3Component } from './form-step3/form-step3.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StepsDemo } from './sign-up-steps.component';
import { StepsDemoRoutingModule } from './steps-routing.module';
import { StepsModule } from 'primeng/steps';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { ReactiveFormsModule } from '@angular/forms';
import { TicketserviceService } from './ticketservice.service';
import { MenuModule } from 'primeng/menu';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StepsDemoRoutingModule,
    StepsModule,
    MenuModule,
    TabViewModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    DropdownModule,
    InputMaskModule,
    CheckboxModule,
    ToastModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],
  declarations: [
    StepsDemo,
    FormStep1Component,
    FormStep2Component,
    FormStep3Component,
  ],
  providers: [TicketserviceService],
})
export class SignUpStepsModule {}
