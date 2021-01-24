import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { PwingeiService } from './pwingei.service';

//outer describe
describe('PwingeiService', () => {
   let service: PwingeiService;

   beforeEach(() => {
    // service = new PwingeiService();

  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(PwingeiService);
   });

   it('Placeholder for a real unit test', () => {
     expect(true).toBe(true);
   });
});
