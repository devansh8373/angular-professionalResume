import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  Header = [
    { 'Text' : 'Home' },
    { 'Text' : 'About' },
    { 'Text' : 'Skills' },
    { 'Text' : 'Qualities' },
    { 'Text' : 'Experience' },
    { 'Text' : 'Education' },
    { 'Text' : 'Portfolio' },
    { 'Text' : 'Contact'},
    { 'Text' : 'Resume', 'class' : 'fa fa-download' },
    ];
  title = 'Divya\'s Profile';
  constructor() {
  }

  ngOnInit() {
  }

}
