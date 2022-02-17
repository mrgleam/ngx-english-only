import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEnglishOnlyComponent } from './ngx-english-only.component';

describe('NgxEnglishOnlyComponent', () => {
  let component: NgxEnglishOnlyComponent;
  let fixture: ComponentFixture<NgxEnglishOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxEnglishOnlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxEnglishOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
