import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { PwingeiService } from '../pwingei.service';
import { DetailComponent } from './detail.component';

//component unit test

describe('DetailComponent', () => {
  let component: DetailComponent;
  let WINGEI_OBJECT;
  let fixture: ComponentFixture<DetailComponent>;
  let mockActivatedRoute, mockPwingeiService;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(() => {

    mockActivatedRoute = {
      snapshot: { paramMap: { get: () => { return '1'; } } }
    }

    WINGEI_OBJECT = [
      { id: 1, type: '7', location: 'Campoma Bridge', date: '2008', imageUrl: '/assets/images/campoma7s.jpg', imageUrl1: '/assets/images/campoma7.jpg', imageUrl2: '/assets/images/campoma7b.jpg', price: '35', name: 'Yellow Tail', available: 'NO', description: 'Add description here.' },
    ]

    mockPwingeiService = jasmine.createSpyObj(['getPhenotypeList', 'getPhenotypeById'])

    TestBed.configureTestingModule({
      declarations: [DetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter },
        { provide: PwingeiService, useValue: mockPwingeiService }
      ]
    });
    fixture = TestBed.createComponent(DetailComponent);
    mockPwingeiService.getPhenotypeById.and.returnValue(of(WINGEI_OBJECT))
  })

  it('should write a proper page title', () => {
    //initialize change detection so bindings are updated
    fixture.detectChanges();
    //could use the debug element in the query function
    expect(fixture.nativeElement.querySelector('h2').textContent).toContain('Common Name');
  })

  it('back button should return to list page', () => {
    fixture.detectChanges();
    let component: DetailComponent = fixture.componentInstance;
    component.onBack();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/list']);
  })
})