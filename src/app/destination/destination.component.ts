import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { data, IDataFetch, IDestination } from '../mork-data/mork';

@Component({
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css'],
})
export class DestinationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  explorationData: IDataFetch = data;

  selectedPlanet!: IDestination;
  onSelectPlanet(planet: IDestination): void {
    this.selectedPlanet = planet;
    console.log(`selectedPlanet = ${JSON.stringify(this.selectedPlanet)}`);
  }
}
