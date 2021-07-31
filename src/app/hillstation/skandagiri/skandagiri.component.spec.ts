import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkandagiriComponent } from './skandagiri.component';

describe('SkandagiriComponent', () => {
  let component: SkandagiriComponent;
  let fixture: ComponentFixture<SkandagiriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkandagiriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkandagiriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
