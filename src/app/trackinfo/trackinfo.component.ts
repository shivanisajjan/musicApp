import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {  Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trackinfo',
  template: `
  <h1 class="to to2"><b>{{topTrackinfo['name']}}</b></h1>
  <section class="to1 container">
    <img src="{{topTrackinfo.album.image[3]['#text']}}" alt="top_track">
    <h4 class="to3"><b>Title:</b>{{topTrackinfo['album']['title']}}</h4>
    <h4 (click)="artist(topTrackinfo['artist']['name'])"><b>Artist:</b>{{topTrackinfo['artist']['name']}}</h4>
    <h4><b>No.of Listeners:</b>{{topTrackinfo['listeners']}}</h4>
    <h4><b>Play Count:</b>{{topTrackinfo['playcount']}}</h4>
  </section>
  <section class="container">
    <h1><b>About</b></h1>
    <h4>(Published: <i>{{topTrackinfo['wiki']['published']}})</i></h4>
    <article class="jam">{{topTrackinfo['wiki']['summary']}}
      <span><a (click)="overview()">read more</a></span>
    </article>
    <h3>Tags:<span>
    <button class="button button5">{{topTrackinfo['toptags'].tag[0]['name']}}</button>
    <button class="button button5">{{topTrackinfo['toptags'].tag[1]['name']}}</button>
    <button class="button button5">{{topTrackinfo['toptags'].tag[2]['name']}}</button>
    <button class="button button5">{{topTrackinfo['toptags'].tag[3]['name']}}</button></span></h3>
    <button (click)="Goto()" class="button1 button5">Back</button>
  </section>
  `,
  styles: []
})
export class TrackinfoComponent implements OnInit {

  public topTrackinfo={};
  public s2;
  public s3;
  constructor(private dataservice:DataService,private route:ActivatedRoute,private router:Router) { }
  topTrack() {
    this.route.params.subscribe(val=>{
      let search=this.route.snapshot.paramMap.get('tname');
      let search1=this.route.snapshot.paramMap.get('Aname');
      this.s2=search;
      this.s3=search1;
      this.dataservice.getArtistName(this.s2,this.s3);
      this.dataservice.getTrackInfo()
      .subscribe(data => this.topTrackinfo = data.track);
      })
  }
  overview(){
    this.router.navigate(['./overview'],{relativeTo:this.route});
  }
  Goto(){
    this.router.navigate(['/music']);
  }
  artist(name:string){
    this.router.navigateByUrl(`artistinfo/${name}`);
  }
  ngOnInit() {
   this.topTrack();
  } 
}