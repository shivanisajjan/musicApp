import { Component } from '@angular/core';
import {DataService} from './data.service';
import {Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'musicApp';
  constructor(private dataservice:DataService,private router:Router,private route:ActivatedRoute) { }
  onEnter(value){
    this.router.navigateByUrl(`search/${value}`);
  }
}