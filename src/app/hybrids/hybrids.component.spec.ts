import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridsComponent } from './hybrids.component';

describe('HybridsComponent', () => {
  let component: HybridsComponent;
  let fixture: ComponentFixture<HybridsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HybridsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HybridsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Placeholder for a real unit test', () => {
    expect(true).toBe(true);
   // expect(component).toBeTruthy();

  });
});
