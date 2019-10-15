import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookReadComponent } from './book-read.component';

describe('BookReadComponent', () => {
  let component: BookReadComponent;
  let fixture: ComponentFixture<BookReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookReadComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
