import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  title = 'Technologies That I\'ve Worked On';
  Technologies = [
    { 'Tech' : 'RESTful API Integration', 'Descrip' : 'Describe Here', 'icon' : ''},
    { 'Tech' : 'Volley & JSON', 'Descrip' : 'Describe Here', 'icon' : '' },
    {'Tech' : 'UI/UX Developmentt', 'Descrip' : 'Describe Here', 'icon' : ''},
  ];
  constructor() { }

  ngOnInit() {
  }

}
