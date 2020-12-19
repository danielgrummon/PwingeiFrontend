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

  phenotypes: IPhenotype[] = [
    {
      "id": 1,
      "name": "Half Red",
      "type": "17",
      "location": "Campoma Bridge",
      "date": "2008",
      "imageUrl": "/assets/images/campoma17.jpg",
      "imageUrl2": "/assets/images/campoma17b.jpg",      
      "price": "40",
      "description": "Number 17 is great because it has red and some not red."
    },
    {
      "id": 2,
      "name": "Yellow Tail",
      "type": "7",
      "location": "Campoma Bridge",
      "date": "2008",
      "imageUrl": "/assets/images/campoma7.jpg",
      "imageUrl2": "/assets/images/campoma7b.jpg",      
      "price": "40",
      "description": "yellow tail is the best for people who really like to see yellow tails."
    },
    {
      "id": 3,
      "name": "Orange TYS",
      "type": "8",
      "location": "Campoma Bridge",
      "date": "2008",
      "imageUrl": "/assets/images/campoma8.jpg",
      "imageUrl2": "/assets/images/campoma8b.jpg",      
      "price": "40",
      "description": "Cant get enough top yellow swords"
    },
    {
      "id": 4,
      "name": "Yellow Dorsal",
      "type": "9",
      "location": "Campoma Bridge",
      "date": "2008",
      "imageUrl": "/assets/images/campoma9.jpg",
      "imageUrl2": "/assets/images/campoma9b.jpg",      
      "price": "40",
      "description": "this one is perfectly dreadful" 
    },
    {
      "id": 5,
      "name": "Blue Snake",
      "type": "31",
      "location": "Campoma Bridge",
      "date": "2011",
      "imageUrl": "/assets/images/campoma31.jpg",
      "imageUrl2": "/assets/images/campoma31b.jpg",      
      "price": "40",
      "description": "One of the bosses, blue and spotty"
    },
    {
      "id": 6,
      "name": "Lavendar",
      "type": "43",
      "location": "Campoma Bridge",
      "date": "2011",
      "imageUrl": "/assets/images/campoma43.jpg",
      "imageUrl2": "/assets/images/campoma43b.jpg",
      "price": "40",
      "description": "purple is better than no purple at all."
    },
    {
      "id": 7,
      "name": "Red",
      "type": "28",
      "location": "Campoma Bridge",
      "date": "2011",
      "imageUrl": "/assets/images/campoma28.jpg",
      "imageUrl2": "/assets/images/campoma28b.jpg",      
      "price": "50",
      "description": "The absolute best of them all."
    },
    {
      "id": 8,
      "name": "Aquamarine",
      "type": "45",
      "location": "Campoma Bridge",
      "date": "2011",
      "imageUrl": "/assets/images/campoma45.jpg",
      "imageUrl2": "/assets/images/campoma45b.jpg",      
      "price": "50",
      "description": "this is what is meant by being real."
    },
    {
      "id": 9,
      "name": "Saddleback",
      "type": "22",
      "location": "Campoma Bridge",
      "date": "2008",
      "imageUrl": "/assets/images/campoma22.jpg",
      "imageUrl2": "/assets/images/campoma22b.jpg",      
      "price": "50",
      "description": "One of the best."
    },
    {
      "id": 10,
      "name": "Green Neon",
      "type": "52",
      "location": "Campoma Bridge",
      "date": "2011",
      "imageUrl": "/assets/images/campoma52.jpg",
      "imageUrl2": "/assets/images/campoma52b.jpg",      
      "price": "50",
      "description": "If you dont have this one it means you are a nobody in the fish hobby."
    },
    {
      "id": 11,
      "name": "Steel Tail",
      "type": "40",
      "location": "Campoma Bridge",
      "date": "2011",
      "imageUrl": "/assets/images/campoma40.jpg",
      "imageUrl2": "/assets/images/campoma40b.jpg",      
      "price": "50",
      "description": "simply splended"
    }
  ];

  constructor(private pwingeiService: PwingeiService) { }

  // onRatingClicked(message: string): void {
  //   this.pageTitle = 'PWingei List: ' + message;
  // }

  // performFilter(filterBy: string): IPhenotype[] {
  //   filterBy = filterBy.toLocaleLowerCase();
  //   return this.phenotypes.filter((phenotype: IPhenotype) =>
  //     phenotype.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  // }

  // toggleImage(): void {
  //   this.showImage = !this.showImage;
  // }

  ngOnInit(): void {
    // this.pwingeiService.getPhenotypes().subscribe({
    //   next: phenotypes => {
    //     this.phenotypes = phenotypes;
    //     this.filteredPhenotypes = this.phenotypes;
    //   },
    //   error: err => this.errorMessage = err
    // });
  }

}
