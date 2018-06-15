import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  Name = 'I\'m Divya';
  Intro = 'I am in the final year of my Engineering in Computer Science. From the last 2 years, I have been working with Civil Machines Technologies Pvt. Ltd. as a Android Developer. I started my career as a Digital Marketer so as to enter in the Industry & to enhance my skills & later on I switched on to Development Profile & got selected as a Jr.Android Developer. I have worked on various modules & live projects & learned many things from Business ethics to Technical things. \n' +
    'I\'m proud to say that even before graduating I\'m working in the industry';
  constructor() { }

  ngOnInit() {
  }

}
