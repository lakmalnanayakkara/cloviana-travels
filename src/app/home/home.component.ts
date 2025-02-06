import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{
  @ViewChild('videoPlayer') videoElement!: ElementRef<HTMLVideoElement>;


  ngAfterViewInit() {
    // Ensure videoElement is defined before accessing it
    if (this.videoElement?.nativeElement) {
      this.videoElement.nativeElement.muted = true;
      this.videoElement.nativeElement.play();
    }
  }
}
