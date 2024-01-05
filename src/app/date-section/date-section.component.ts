import { Component, OnInit } from '@angular/core';
import { animate, inView } from 'motion';

@Component({
  selector: 'app-date-section',
  templateUrl: './date-section.component.html',
  styleUrls: ['./date-section.component.scss']
})
export class DateSectionComponent implements OnInit {

  ngOnInit(): void {
    inView('.date-section__detail__first', (info) => {
      animate(
        info.target,
        { opacity: 1 },
        { delay: 0.25, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
    });
    inView('.date-section__detail__second', (info) => {
      animate(
        info.target,
        { opacity: 1 },
        { delay: 0.45, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
    });

    inView('.cactus-l', (info) => {
      animate(
        info.target,
        { opacity: 1, transform: 'none' },
        { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
    });
    inView('.herradura', (info) => {
      animate(
        info.target,
        { opacity: 1, transform: 'none' },
        { delay: 0.45, duration: 0.6, easing: [0.17, 0.55, 0.55, 1] }
      );
    });
    inView('.whisky', (info) => {
      animate(
        info.target,
        { opacity: 1, transform: 'none' },
        { delay: 0.3, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
    });
    inView('.cactus-r', (info) => {
      animate(
        info.target,
        { opacity: 1, transform: 'none' },
        { delay: 0.2, duration: 0.8, easing: [0.17, 0.55, 0.55, 1] }
      );
    });
    inView('.sheriff-i', (info) => {
      animate(
        info.target,
        { opacity: 1, transform: 'none' },
        { delay: 0.2, duration: 0.8, easing: [0.17, 0.55, 0.55, 1] }
      );
    });
    inView('.date-section__btn', (info) => {
      animate(
        info.target,
        { opacity: 1, transform: 'none' },
        { delay: 0.2, duration: 0.8, easing: [0.17, 0.55, 0.55, 1] }
      );
    });
    inView('.sombrero', (info) => {
      animate(
        info.target,
        { opacity: 1, transform: 'none' },
        { delay: 0.2, duration: 0.5, easing: [0.17, 0.55, 0.55, 1] }
      );
    });
  }
}
