import { Component, Input, OnInit } from '@angular/core';
import type { Tour } from '../../shared/models/tours';

@Component({
  selector: 'app-tour-package',
  standalone: false,

  templateUrl: './tour-package.component.html',
  styleUrl: './tour-package.component.css',
})
export class TourPackageComponent {
  @Input() tour: Tour;

  getFormattedTourName(name: string): string {
    return name.replace(/\s+/g, '-');
  }
}
