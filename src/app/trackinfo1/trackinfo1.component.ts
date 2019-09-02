import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trackinfo1',
  template: `
    <article class="jam container">{{topTrackinfo['wiki']['summary']}}</article>
  `,
  styles: []
})
export class Trackinfo1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
