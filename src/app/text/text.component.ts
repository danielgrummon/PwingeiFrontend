import { Component, Input, OnInit } from '@angular/core';
import { IPhenotype } from '../list/list.model';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

 @Input() phenotype: IPhenotype;

  constructor() { }

  ngOnInit(): void {

  }

}
