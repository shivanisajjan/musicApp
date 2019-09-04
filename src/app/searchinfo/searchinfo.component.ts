import { Component, OnInit, OnDestroy, } from '@angular/core';
import {DataService} from '../data.service';
import {  Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchinfo',
  template: `
  <h2 class="to container">Search Results</h2>
  <div class="container">
  <section class="row container">
    <div *ngFor="let i of searchTrackInfo11" class="col-sm-2" style="height:220px;">
      <div routerLink="/trackinfo" (click)="getArtistName1(i.name,i.artist)" class="t1 panel">
        <img src="{{i.image[2]['#text'] || 'assets/img/12.jpg'}}" alt="top_track">
          <p>{{i.name}}</p>
      </div>
    </div>
  </section>
  </div>
  `,
  styles: []
})
export class SearchinfoComponent implements OnInit{

  public searchTrackInfo11=[];
  public s2;
  constructor(private dataservice:DataService,private route:ActivatedRoute,private router:Router) {
   }
  Track() {
    this.route.params.subscribe(val=>{
      let search=this.route.snapshot.paramMap.get('name');
      this.s2=search;
      this.dataservice.getSearchInfo(this.s2);
      this.dataservice.getSearchInfo1()
        .subscribe(data => this.searchTrackInfo11 = data.results.trackmatches.track);
      })
  }
  getArtistName1(trackName,artistName){
    this.dataservice.getArtistName(trackName,artistName);
  }
  ngOnInit() {
    this.Track();
  }
}
