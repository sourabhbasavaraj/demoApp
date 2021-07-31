import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamsComponent } from './dams.component';

describe('DamsComponent', () => {
  let component: DamsComponent;
  let fixture: ComponentFixture<DamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
