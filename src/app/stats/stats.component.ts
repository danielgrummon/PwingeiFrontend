import { Component, Input, OnInit } from '@angular/core';
import { IPhenotype } from '../list/list.model';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  @Input() phenotype: IPhenotype;

  constructor() { }

  ngOnInit(): void {
  }
}
