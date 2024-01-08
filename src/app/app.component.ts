import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('music') playerRef: ElementRef<HTMLAudioElement>;

  constructor() {}

  ngAfterViewInit(): void {
    this.playerRef.nativeElement.play();
    this.playerRef.nativeElement.volume = 0.25;
  }
}
