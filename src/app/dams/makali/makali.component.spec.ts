import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakaliComponent } from './makali.component';

describe('MakaliComponent', () => {
  let component: MakaliComponent;
  let fixture: ComponentFixture<MakaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
