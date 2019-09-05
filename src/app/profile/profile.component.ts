import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {  Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  template: `
  <div class="to container tab">                                                                                     
    <div class="table-responsive">          
     <table class="table">
      <tbody *ngFor="let i of trackdata">
          <tr>
            <td (click)="getArtistName(i.name,i.artist.name)"><img src="{{i.image[0]['#text']}}" alt="top_track"> {{i.name}}</td>
            <td (click)="getArtistName1(i.artist.name)">{{i.artist.name}}</td>
            <td (click)="removefav(i.id)"><i class="fa fa-trash-o" style="font-size:180%;color:red"></i></td>
          </tr>
     </tbody>
     <tbody *ngFor="let i of trackdata1">
          <tr>
            <td (click)="getArtistName(i.name,i.artist)"><img src="{{i.image[0]['#text'] || 'assets/img/1.png'}}" alt="top_track"> {{i.name}}</td>
            <td (click)="getArtistName1(i.artist)">{{i.artist}}</td>
            <td (click)="removefav1(i.id)"><i class="fa fa-trash-o" style="font-size:180%;color:red"></i></td>
          </tr>
     </tbody>
    </table>
  </div>
</div>
  `,
  styles: []
})
export class ProfileComponent implements OnInit {

  public trackdata;
  public trackdata1;
  constructor(private dataservice:DataService,private router:Router,private route:ActivatedRoute) { }
  topTrack() {
    this.dataservice.getjsondata()
      .subscribe(data => this.trackdata = data);
  }
  topTrack1() {
    this.dataservice.getjsondata1()
      .subscribe(data => this.trackdata1 = data);
  }
  getArtistName(trackName,artistName){
    this.router.navigateByUrl(`trackinfo/${trackName}/${artistName}`);
  }
  getArtistName1(artistName){
    this.router.navigateByUrl(`artistinfo/${artistName}`);
  }
  removefav(id){
    this.dataservice.removefavo(id).subscribe((data)=>{this.ngOnInit();})
  }
  removefav1(id){
    this.dataservice.removefavo1(id).subscribe((data)=>{this.ngOnInit();})
  }
  ngOnInit() {
    this.topTrack();
    this.topTrack1();
  }

}
