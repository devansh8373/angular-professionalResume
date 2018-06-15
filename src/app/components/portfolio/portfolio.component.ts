import { Component, OnInit } from '@angular/core';
import {Button} from '../../Typescript/buttons';
import {image } from '../../Typescript/projectImg';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  BuTTons = Button;
  Img = image;
  constructor() { }

  ngOnInit() {
  }

}
