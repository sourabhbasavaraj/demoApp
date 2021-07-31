import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NandihillsComponent } from './nandihills.component';

describe('NandihillsComponent', () => {
  let component: NandihillsComponent;
  let fixture: ComponentFixture<NandihillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NandihillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NandihillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
