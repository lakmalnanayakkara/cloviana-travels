import { Component, OnInit } from '@angular/core';
import { Destination } from '../shared/models/Destination';
import { DestinationsService } from '../services/destinations/destinations.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-destination-description',
  standalone: false,

  templateUrl: './destination-description.component.html',
  styleUrl: './destination-description.component.css',
})
export class DestinationDescriptionComponent implements OnInit {
  destination!: Destination;
  constructor(
    private destinationsService: DestinationsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      if (params.name)
        this.destination = this.destinationsService.getDestinationByName(
          params.name
        );
    });
  }

  ngOnInit(): void {
    console.log(this.destination.blog);
  }
}
