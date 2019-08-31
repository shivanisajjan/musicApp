import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistTopAlbumComponent } from './artist-top-album.component';

describe('ArtistTopAlbumComponent', () => {
  let component: ArtistTopAlbumComponent;
  let fixture: ComponentFixture<ArtistTopAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistTopAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistTopAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
