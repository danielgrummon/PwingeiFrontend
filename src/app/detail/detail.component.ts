import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IPhenotype } from '../list/list.model';
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

    this.phenotype = this.phenotypes.find(function(phenotype, id) {
      if(phenotype.id == id)
        return true;
    });

  }

  getPhenotypeList() {
    this.pwingeiService.getPhenotypeList().subscribe({
      next: phenotypes => this.phenotypes = phenotypes,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/list']);
  }
}
