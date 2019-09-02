import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trackinfo1Component } from './trackinfo1.component';

describe('Trackinfo1Component', () => {
  let component: Trackinfo1Component;
  let fixture: ComponentFixture<Trackinfo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trackinfo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trackinfo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
