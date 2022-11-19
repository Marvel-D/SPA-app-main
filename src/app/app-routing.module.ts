import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DestinationComponent } from './destination/destination.component';
import { CrewComponent } from './crew/crew.component';
import { CrewLoginComponent } from './crew-login/crew-login.component';
import { StepsDemo } from './sign-up-steps/sign-up-steps.component';
import { FormStep1Component } from './sign-up-steps/form-step1/form-step1.component';
import { FormStep2Component } from './sign-up-steps/form-step2/form-step2.component';
import { FormStep3Component } from './sign-up-steps/form-step3/form-step3.component';

import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'destination',
    component: DestinationComponent,
  },
  {
    path: 'crew',
    component: CrewComponent,
  },
  {
    path: 'crew-login',
    component: CrewLoginComponent,
  },
  {
    path: 'technology',
    component: TechnologyComponent,
  },
  {
    path: 'sign-up',
    component: StepsDemo,
    children: [
      { path: '', redirectTo: 'step1', pathMatch: 'full' },
      { path: 'step1', component: FormStep1Component },
      { path: 'step2', component: FormStep2Component },
      { path: 'step3', component: FormStep3Component },
    ],
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
