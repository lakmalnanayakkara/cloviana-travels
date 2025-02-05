import { Component, OnInit } from '@angular/core';
import { Tour } from '../shared/models/tours';
import { ActivatedRoute } from '@angular/router';
import { ToursService } from '../services/tours/tours.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tour-page',
  standalone: false,

  templateUrl: './tour-page.component.html',
  styleUrl: './tour-page.component.css',
})
export class TourPageComponent {
  tour!: Tour;
  expandedIndex: number | null = null;
  safeIframeUrl: SafeResourceUrl;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tourService: ToursService,
    private sanitizer: DomSanitizer
  ) {
    this.activatedRoute.params.subscribe((params) => {
      if (params.name)
        this.tour = this.tourService.getTourByName(
          this.getOriginalTourName(params.name)
        );
    });
    this.safeIframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.tour.iframe
    );
  }

  toggleExpand(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  getOriginalTourName(formattedName: string): string {
    return formattedName.replace(/-/g, ' ');
  }
}
