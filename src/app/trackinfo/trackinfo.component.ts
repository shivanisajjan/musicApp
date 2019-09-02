import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { ActivatedRouteSnapshot, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trackinfo',
  template: `
  <h1 class="to to2"><b>{{topTrackinfo['name']}}</b></h1>
  <section class="to1 container">
    <img src="{{topTrackinfo.album.image[3]['#text']}}" alt="top_track">
    <h4 class="to3"><b>Title:</b>{{topTrackinfo['album']['title']}}</h4>
    <h4><b>Artist :</b>{{topTrackinfo['artist']['name']}}</h4>
    <h4><b>No.of Listeners:</b>{{topTrackinfo['listeners']}}</h4>
    <h4><b>Play Count:</b>{{topTrackinfo['playcount']}}</h4>
  </section>
  <section class="container">
    <h1><b>About</b></h1>
    <h4>(Published: <i>{{topTrackinfo['wiki']['published']}})</i></h4>
    <article class="jam">{{topTrackinfo['wiki']['summary']}}</article>
    <a href="#" class="btn btn-default b1">Learn more 
      <span class="glyphicon glyphicon-circle-arrow-right"></span>
    </a>
    <button (click)="Goto()">Back</button>
  </section>
  `,
  styles: []
})
export class TrackinfoComponent implements OnInit {

  public objectKeys=Object.keys;
  public topTrackinfo={};
  public topTrackinfo1={};
  constructor(private dataservice:DataService,private route:ActivatedRoute,private router:Router) { }
  topTrack() {
    this.dataservice.getTrackInfo()
      .subscribe(data => this.topTrackinfo = data.track);
  }
  Goto(){
    this.router.navigate(['/music']);
  }
  ngOnInit() {
   this.topTrack();
  }
  
}
