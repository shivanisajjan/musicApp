import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchinfoComponent } from './searchinfo.component';

describe('SearchinfoComponent', () => {
  let component: SearchinfoComponent;
  let fixture: ComponentFixture<SearchinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
