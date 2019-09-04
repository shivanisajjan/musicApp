import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {  Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artistlist',
  template: `
  <section class="row">
    <div *ngFor="let i of topArtist1 | slice:0:30" class="col-sm-2" style="height:100%;">
      <div routerLink="/artistinfo" (click)="getArtistName(i.name)" class="t1 panel">
        <img src="{{i.image[2]['#text']}}" alt="top_artist">
          <p>{{i.name}}</p>
      </div>
    </div>
  </section>
  `,
  styles: []
})
export class ArtistlistComponent implements OnInit {

  public topArtist1=[];
  constructor(private dataservice:DataService,private route:ActivatedRoute,private router:Router) { }
  topArtist() {
    this.dataservice.getTopArtist()
      .subscribe(data => this.topArtist1 = data.topartists.artist);
  }
  getArtistName(artistName){
    this.dataservice.getartistdetails(artistName);
  }
  ngOnInit() {
    this.topArtist();
  }

}
