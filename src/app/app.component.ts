import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('music') playerRef: ElementRef<HTMLAudioElement>;
  @ViewChild('btn') btn: ElementRef<HTMLButtonElement>;

  constructor() {}

  ngAfterViewInit(): void {
    this.btn.nativeElement.click();
  }

  toPlay() {
    this.playerRef.nativeElement
      .play()
      .then(() => {})
      .catch(() => {
        this.playerRef.nativeElement.play();
      });
  }
}
