import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-artist-top-album',
  template: `
  <section class="container">
  <h1 class="to">Top Track</h1>
    <section class="row">
      <div *ngFor="let i of topTrack1 | slice:0:30" class="col-sm-2" style="height:220px;">
        <div routerLink="/toptrack" (click)="getArtistName(i.name,i.artist.name)" class="panel">
          <img src="{{i.image[2]['#text']}}" alt="top_track">
            <p>{{i.name}}</p>
        </div>
      </div>
    </section>
    <h1>Top Artist</h1>
    <section class="row">
      <div *ngFor="let i of topArtist1 | slice:0:30" class="col-sm-2" style="height:220px;">
        <div class="panel">
          <img src="{{i.image[2]['#text']}}" alt="top_artist">
            <p>{{i.name}}</p>
        </div>
      </div>
    </section>
  </section>
  `,
  styles: []
})
export class ArtistTopAlbumComponent implements OnInit {
  
  public artistTopAlbum1=[];
  public topTrack1=[];
  public topArtist1=[];
  constructor(private dataservice:DataService) { }
  showArtistTopAlbum() {
    this.dataservice.getArtistTopAlbum()
      .subscribe(data => this.artistTopAlbum1 = data.topalbums.album);
  }
  topTrack() {
    this.dataservice.getTopTrack()
      .subscribe(data => this.topTrack1 = data.tracks.track);
  }
  topArtist() {
    this.dataservice.getTopArtist()
      .subscribe(data => this.topArtist1 = data.topartists.artist);
  }
  getArtistName(trackName,artistName){
    console.log(trackName);
  }

  ngOnInit() {
    this.showArtistTopAlbum();
    this.topTrack();
    this.topArtist();
  }

}
