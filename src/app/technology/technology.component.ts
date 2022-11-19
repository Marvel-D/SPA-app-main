import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { PanelModule } from 'primeng/panel';

@Component({
  standalone: true,
  imports: [
    ButtonModule,
    SplitButtonModule,
    NavbarComponent,
    DialogModule,
    InputTextModule,
    ToolbarModule,
    PanelModule,
  ],
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css'],
})
export class TechnologyComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  schedule: boolean = true;

  displaySchedule() {
    this.schedule = true;
  }
}
