import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookIntroComponent } from './book-intro.component';

describe('BookIntroComponent', () => {
  let component: BookIntroComponent;
  let fixture: ComponentFixture<BookIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookIntroComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
