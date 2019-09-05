import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {  Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-charts',
  template: `
  <section class="container">
    <h1 class="to hrtag">charts</h1>
    <section class="chart1">
      <div class="row features">
        <div class="col-sm-4 panel panel-default">
          <h2 class="panel-heading">Top Tracks</h2>
          <div *ngFor="let i of chartTopTrack1 ">
            <p (click)="getArtistName1(i.name,i.artist.name)">{{i.name}}</p>
          </div>
        </div>
        <div class="col-sm-4 panel panel-default">
          <h2 class="panel-heading">Top Artists</h2>
          <div *ngFor="let i of chartTopArtist1">
           <p (click)="getArtistName(i.name)">{{i.name}}</p>
         </div>
        </div>
        <div class="col-sm-4 panel panel-default">
          <h2 class="panel-heading">Top Tags</h2>
          <div *ngFor="let i of chartTopTags1">
           <p>{{i.name}}</p>
         </div>
        </div>
      </div>
    </section>
    <button (click)="Goto()" class="button1 button5">Back</button>
  </section>

  `,
  styles: []
})
export class ChartsComponent implements OnInit {

  public chartTopTrack1=[];
  public chartTopArtist1=[];
  private chartTopTags1=[];
  constructor(private dataservice:DataService,private route:ActivatedRoute,private router:Router) { }
  chartTopTrack() {
    this.dataservice.getChartTopTrack()
      .subscribe(data => this.chartTopTrack1 = data.tracks.track);
  } 
  chartTopArtist() {
    this.dataservice.getChartTopArtist()
      .subscribe(data => this.chartTopArtist1 = data.artists.artist);
  } 
  chartTopTags() {
    this.dataservice.getChartTopTags()
      .subscribe(data => this.chartTopTags1 = data.tags.tag);
  } 
  Goto(){
    this.router.navigate(['/music']);
  }
  getArtistName1(trackName,artistName){
    this.router.navigateByUrl(`trackinfo/${trackName}/${artistName}`);
  }
  getArtistName(artistName){
    this.router.navigateByUrl(`artistinfo/${artistName}`);
  }
  ngOnInit() {
    this.chartTopTrack();
    this.chartTopArtist();
    this.chartTopTags();
  }

}
