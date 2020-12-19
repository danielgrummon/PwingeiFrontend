import { Component, OnInit } from '@angular/core';
import { IPhenotype } from './list.model';
import { PwingeiService } from '../pwingei.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  pageTitle = 'Phenotype List';
  imageWidth = 150;
  imageMargin = 0;
  errorMessage = '';

  phenotypes: IPhenotype[];

  constructor(private pwingeiService: PwingeiService) { }

  ngOnInit() {
    this.getPhenotypeList();
  }

  getPhenotypeList() {
    this.pwingeiService.getPhenotypeList().subscribe({
      next: phenotypes => this.phenotypes = phenotypes,
      error: err => this.errorMessage = err
    });
  }
}
