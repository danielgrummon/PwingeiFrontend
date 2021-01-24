import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListComponent } from './list.component';

//component unit test

describe('ListComponent', () => {
  let component: ListComponent;
  let WINGEI_LIST;
  let mockPwingeiService;

  beforeEach(() => {
    WINGEI_LIST = [
      { id: 1, type: '7', location: 'Campoma Bridge', date: '2008', imageUrl: '/assets/images/campoma7s.jpg', imageUrl1: '/assets/images/campoma7.jpg', imageUrl2: '/assets/images/campoma7b.jpg', price: '35', name: 'Yellow Tail', available: 'NO', description: 'Add description here.' },
      { id: 2, type: '8', location: 'Campoma Bridge', date: '2008', imageUrl: '/assets/images/campoma8s.jpg', imageUrl1: '/assets/images/campoma8.jpg', imageUrl2: '/assets/images/campoma8b.jpg', price: '40', name: 'Orange TYS', available: 'NO', description: 'Add description here.' },
      { id: 3, type: '9', location: 'Campoma Bridge', date: '2008', imageUrl: '/assets/images/campoma9s.jpg', imageUrl1: '/assets/images/campoma9.jpg', imageUrl2: '/assets/images/campoma9b.jpg', price: '45', name: 'Yellow Dorsal', available: 'NO', description: 'Add description here.' }
    ]

    mockPwingeiService = jasmine.createSpyObj(['getPhenotypeList', 'getPhenotypeById'])
    component = new ListComponent(mockPwingeiService);
  });

  describe('getPhenotypeList', () => {
    it('should retrieve a list of guppy inventory', () => {

      //returns an observable
      mockPwingeiService.getPhenotypeList.and.returnValue(of(WINGEI_LIST))
      component.phenotypes = WINGEI_LIST;
      component.getPhenotypeList();

      //need mock object to return an observable when getPhenotypeList is called
      expect(component.phenotypes.length).toBe(3);
    })
  })
})
