import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { TicketserviceService } from './ticketservice.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './sign-up-steps.component.html',
  styleUrls: ['sign-up-steps.component.css'],
  providers: [MessageService],
})
export class StepsDemo implements OnInit {
  items!: MenuItem[];

  subscription!: Subscription;

  constructor(
    public messageService: MessageService,
    public ticketService: TicketserviceService
  ) {}

  ngOnInit() {
    this.items = [
      {
        label: 'step1',
        routerLink: 'step1',
      },
      {
        label: 'step2',
        routerLink: 'step2',
      },
      {
        label: 'step3',
        routerLink: 'step3',
      },
    ];

    this.subscription = this.ticketService.paymentComplete$.subscribe(
      (personalInformation: { firstname: string; lastname: string }) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Order submitted',
          detail:
            'Dear, ' +
            personalInformation.firstname +
            ' ' +
            personalInformation.lastname +
            ' your order completed.',
        });
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
