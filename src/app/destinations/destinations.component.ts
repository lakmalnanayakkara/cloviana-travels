import { Component, OnInit } from '@angular/core';
import { Destination } from '../shared/models/Destination';
import { DestinationsService } from '../services/destinations/destinations.service';

@Component({
  selector: 'app-destinations',
  standalone: false,
  
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.css'
})
export class DestinationsComponent implements OnInit {

  destinations:Destination[]=[];
  constructor(private destinationsService:DestinationsService){}
  ngOnInit(): void {
    this.destinations = this.destinationsService.getAll();
  }
  

}
