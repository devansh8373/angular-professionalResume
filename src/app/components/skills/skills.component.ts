import { Component, OnInit } from '@angular/core';
import { progressBar } from '../../Typescript/progress-bar';
import { progressBar2 } from '../../Typescript/progress-bar';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
   skillType1 = 'Programming Skills';
   skillType2 = 'Technical Skills';
   progress_Bar = progressBar;
   progress_Bar2 = progressBar2;
   constructor() { }

  ngOnInit() {
  }

}
