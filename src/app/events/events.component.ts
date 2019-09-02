import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  template: `
  <section class="container">
  <h1 class="to hrtag">Events</h1>
  <p style="font-size:20px;">There are no upcoming events near you for this date, try setting a different date. </p>
  </section>
  `,
  styles: []
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
