import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackinfoComponent } from './trackinfo.component';

describe('TrackinfoComponent', () => {
  let component: TrackinfoComponent;
  let fixture: ComponentFixture<TrackinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
