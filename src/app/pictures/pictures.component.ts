import { Component, Input, OnInit } from '@angular/core';
import { IPhenotype } from '../list/list.model';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

  imageWidth = 500;
  imageMargin = 2;

  @Input() imageLocation: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
