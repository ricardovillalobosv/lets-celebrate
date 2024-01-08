import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TimelineDefinition, animate, timeline } from 'motion';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  @ViewChild('music') playerRef: ElementRef<HTMLAudioElement>;

  ngOnInit(): void {
    animate(
      '.hero__img',
      { opacity: 1 },
      { delay: 0.3, duration: 0.9, easing: 'ease-in-out' }
    );
    const sequence: TimelineDefinition = [
      // [
      //   '.hero__subtitle',
      //   { opacity: 1 },
      //   { delay: 0.4, duration: 0.5, easing: 'ease-in-out' },
      // ],
      [
        '.hero-pattern-title',
        { opacity: 1 },
        { delay: 0.2, duration: 0.4, easing: 'ease-in-out' },
      ],
      [
        '.hero__title',
        { opacity: 1 },
        { delay: 0.1, duration: 0.9, easing: 'ease-in-out' },
      ],
    ];
    timeline(sequence);
  }

  play() {
    console.log('click');
    this.playerRef.nativeElement.play();
  }
}
