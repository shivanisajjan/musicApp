import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {  Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artistdetails',
  template: `
  <h1 class="to to2"><b>{{topArtistinfo['name']}}</b></h1>
  <section class="to1 container">
    <img src="{{topArtistinfo.image[3]['#text']}}" alt="top_Artist">
    <h4><b>No.of Listeners:</b>{{topArtistinfo.stats['listeners']}}</h4>
    <h4><b>Play Count:</b>{{topArtistinfo.stats['playcount']}}</h4>
    <h4><b>Similar Artist:</b></h4>
    <p><button (click)="getArtistName(i.name)" class="button button6">{{topArtistinfo.similar.artist[0].name}}</button></p>
    <p><button class="button button6">{{topArtistinfo.similar.artist[1].name}}</button></p>
    <p><button class="button button6">{{topArtistinfo.similar.artist[2].name}}</button></p>
    <p><button class="button button6">{{topArtistinfo.similar.artist[3].name}}</button></p>
    <p><button class="button button6">{{topArtistinfo.similar.artist[4].name}}</button></p>
  </section>
  <button (click)="Goto()" class="button1 button5">Back</button>
  
  `,
  styles: []
})
export class ArtistdetailsComponent implements OnInit {

  public topArtistinfo={};
  constructor(private dataservice:DataService,private route:ActivatedRoute,private router:Router) { }
  topArtist() {
    this.dataservice.getArtistInfo()
      .subscribe(data => this.topArtistinfo = data.artist);
  }
  getArtistName(artistName){
    this.dataservice.getartistdetails(artistName);
  }
  Goto(){
    this.router.navigate(['/music']);
  }
  ngOnInit() {
    this.topArtist();
  }

}
