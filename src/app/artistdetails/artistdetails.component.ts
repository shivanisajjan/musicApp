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
    <p><button (click)="getArtistName(topArtistinfo.similar.artist[0].name)" class="button button6">{{topArtistinfo.similar.artist[0].name}}</button></p>
    <p><button (click)="getArtistName(topArtistinfo.similar.artist[1].name)" class="button button6">{{topArtistinfo.similar.artist[1].name}}</button></p>
    <p><button (click)="getArtistName(topArtistinfo.similar.artist[2].name)" class="button button6">{{topArtistinfo.similar.artist[2].name}}</button></p>
    <p><button (click)="getArtistName(topArtistinfo.similar.artist[3].name)" class="button button6">{{topArtistinfo.similar.artist[3].name}}</button></p>
    <p><button (click)="getArtistName(topArtistinfo.similar.artist[4].name)" class="button button6">{{topArtistinfo.similar.artist[4].name}}</button></p>
  </section>
  <section class="container">
    <h1><b>About</b></h1>
    <h4>(Published: <i>{{topArtistinfo['bio']['published']}})</i></h4>
    <article class="jam">{{topArtistinfo['bio']['summary']}}
      <span><a (click)="overview()">read more</a></span>
    </article>
    <h3>Tags:<span>
    <button class="button button5">{{topArtistinfo['tags'].tag[0]['name']}}</button>
    <button class="button button5">{{topArtistinfo['tags'].tag[1]['name']}}</button>
    <button class="button button5">{{topArtistinfo['tags'].tag[2]['name']}}</button>
    <button class="button button5">{{topArtistinfo['tags'].tag[3]['name']}}</button></span></h3>
    <button (click)="Goto()" class="button1 button5">Back</button>
  </section>
  `,
  styles: []
})
export class ArtistdetailsComponent implements OnInit {

  public topArtistinfo={};
  public s2;
  constructor(private dataservice:DataService,private route:ActivatedRoute,private router:Router) { }
  getArtistName(artistName){
    console.log(artistName);
    this.router.navigateByUrl(`artistinfo/${artistName}`);
  }
  topArtist() {
    this.route.params.subscribe(val=>{
      let search=this.route.snapshot.paramMap.get('aname');
      this.s2=search;
      this.dataservice.getartistdetails(this.s2);
      this.dataservice.getArtistInfo()
      .subscribe(data => this.topArtistinfo = data.artist);
      })
  }
  
  Goto(){
    this.router.navigate(['/music/artistas']);
  }
  ngOnInit() {
    this.topArtist();
  }
}
