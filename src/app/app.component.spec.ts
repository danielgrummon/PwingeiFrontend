import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {

    //testbead allows us to test component and its template running together
    //create a special module just for testing purposes
    TestBed.configureTestingModule({

      //just need the declarations section and will add in the one component we are testing
      declarations: [AppComponent]

      //(dont use this unless really needed) NO_ERRORS_SCHEMA tells angular in this test to ignore unknown elements and attributes. It exists both on live and testing modules
      //, schemas: [NO_ERRORS_SCHEMA]
      
    }).compileComponents();

    //returns a componentFixture which is a wrapper for a component that is used in testing 
    fixture = TestBed.createComponent(AppComponent);
  }));

  it('a valid wrapper for a component was created for testing', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it(`should have as title 'pwingeiFrontend'`, () => {
    expect(fixture.componentInstance.pageTitle).toEqual('PWINGEI');
  });

  it('should render title', () => {

    //tells angular to implement the bindings. Bindings so not get updated until change detection runs.
    fixture.detectChanges();

    //tests the template by grabbing the DOM and checking that the anchor tag text in the DOM is correct which is something that cannot be done in an isolated unit test
    expect(fixture.nativeElement.querySelector('a').textContent).toContain('PWINGEI');

    //debugElement is like the native element, it is a way to access the root element of the template.
    //unlike the native element which is just exposing the underlying  DOM api, the debug element is more of a wrapper that has a differtent set of functionality that is 
    //very similar to the native element.
    //query function takes a predicate.
    expect(fixture.debugElement.query(By.css('a')).nativeElement.textContent).toContain('PWINGEI');

  });
});
