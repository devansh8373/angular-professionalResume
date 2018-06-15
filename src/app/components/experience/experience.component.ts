import { Component, OnInit } from '@angular/core';
import { Timelines } from '../../Typescript/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  title = 'Professional Experience';
  Timeline = Timelines;
  i: number;
  constructor() { }
  ngOnInit() {
    console.log(this.Timeline);
  }

}
