import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IPhenotype } from '../list/list.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  pageTitle = 'PWingei';
  errorMessage = '';
  phenotype: IPhenotype;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.phenotype = {
      "id": 10,
      "name": "Green Neon",
      "type": "52",
      "location": "Campoma Bridge",
      "date": "2011",
      "imageUrl": "/assets/images/campoma52.jpg",
      "imageUrl2": "/assets/images/campoma52b.jpg",
      "price": "50",
      "description": "If you dont have one of these then you will just have to go home."
    }
  }

  onBack(): void {
    this.router.navigate(['/list']);
  }
}
