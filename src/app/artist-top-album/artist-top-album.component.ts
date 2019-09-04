import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {  Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-top-album',
  template: `
  <section class="to container-fluid">
  <button class="button2 button5"><h4>Top Track</h4></button>
    <section class="row">
      <div *ngFor="let i of topTrack1 | slice:0:30" class="col-sm-2" style="height:100%;">
        <div (click)="getArtistName(i.name,i.artist.name)" class="t1 panel">
          <img src="{{i.image[2]['#text']}}" alt="top_track">
            <p>{{i.name}}<i class='far fa-bookmark icon' style='font-size:20px'></i></p>
        </div>
      </div>
    </section>
    <button (click)="artistall()" class="button2 button5"><h4>Top Artist</h4></button>
    <router-outlet></router-outlet>
  </section>
  `,
  styles: []
})
export class ArtistTopAlbumComponent implements OnInit {
  
  public artistTopAlbum1=[];
  public topTrack1=[];
  public topArtist1=[];
  public ArtistName="";
  public TrackName="";
  public trackInfoUrl="";
  constructor(private dataservice:DataService,private route:ActivatedRoute,private router:Router) { }
  topTrack() {
    this.dataservice.getTopTrack()
      .subscribe(data => this.topTrack1 = data.tracks.track);
  }
  topArtist() {
    this.dataservice.getTopArtist()
      .subscribe(data => this.topArtist1 = data.topartists.artist);
  }
  getArtistName(trackName,artistName){
    this.router.navigateByUrl(`trackinfo/${trackName}/${artistName}`);
  }
  artistall(){
    this.router.navigate(['artistas'],{relativeTo:this.route});
  }
  ngOnInit() {
    this.topTrack();
    this.topArtist();
  }

}
