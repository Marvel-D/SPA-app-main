import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from '../navbar/navbar.component';

import { data, IDataFetch, ICrew } from '../mork-data/mork';

@Component({
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css'],
})
export class CrewComponent implements OnInit {
  constructor() {}

  explorationData: IDataFetch = data;

  selectedMember!: ICrew;

  onSelectMember(selectedMember: ICrew) {
    this.selectedMember = selectedMember;
  }
  ngOnInit() {}
}
