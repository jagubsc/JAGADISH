import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookaserviceComponent } from './bookaservice.component';

describe('BookaserviceComponent', () => {
  let component: BookaserviceComponent;
  let fixture: ComponentFixture<BookaserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookaserviceComponent]
    });
    fixture = TestBed.createComponent(BookaserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
