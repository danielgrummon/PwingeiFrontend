import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IPhenotype } from './list.model';
import { PwingeiService } from '../pwingei.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  pageTitle = 'PWingei';
  errorMessage = '';
  phenotype: IPhenotype;
  phenotypes: IPhenotype[];

  constructor(private route: ActivatedRoute, private router: Router, private pwingeiService: PwingeiService) {
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.getPhenotypeList();
    this.setPhenotypeById(id);
  }


  getPhenotypeList() {
    this.pwingeiService.getPhenotypeList().subscribe({
      next: phenotypes => this.phenotypes = phenotypes,
      error: err => this.errorMessage = err
    });
  }

  setPhenotypeById(id){
    this.phenotype = this.phenotypes.find(phenotype => phenotype.id === id);
  }

  onBack(): void {
    this.router.navigate(['/list']);
  }
}
