import { Component, OnInit } from '@angular/core';
import { animate, inView } from 'motion';

@Component({
  selector: 'app-location-section',
  templateUrl: './location-section.component.html',
  styleUrls: ['./location-section.component.scss'],
})
export class LocationSectionComponent implements OnInit {
  ngOnInit(): void {
    inView('.location-flags', (info) => {
      animate(
        info.target,
        { opacity: 1, transform: 'none' },
        { delay: 0.4, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
    });
    inView('.location-section__message', (info) => {
      animate(
        info.target,
        { opacity: 1 },
        { delay: 0.8, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
    });
    inView('.location-section__btn', (info) => {
      animate(
        info.target,
        { opacity: 1, transform: 'none' },
        { delay: 0.85, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
    });
  }
}
