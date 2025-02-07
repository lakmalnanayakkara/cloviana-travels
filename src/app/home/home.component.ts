import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import reviews from '../shared/models/reviews';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  reviewList = reviews;
  carouselOptions = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  };

  @ViewChild('videoPlayer', { static: false })
  videoPlayer!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    if (this.videoPlayer) {
      this.videoPlayer.nativeElement.muted = true;
      this.videoPlayer.nativeElement.loop = true;
      this.videoPlayer.nativeElement.play();
    }
  }
}
