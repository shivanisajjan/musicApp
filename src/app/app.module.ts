import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { EventsComponent } from './events/events.component';
import { ProfileComponent } from './profile/profile.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TrackinfoComponent } from './trackinfo/trackinfo.component';
import { Trackinfo1Component } from './trackinfo1/trackinfo1.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    EventsComponent,
    ProfileComponent,
    PagenotfoundComponent,
    TrackinfoComponent,
    Trackinfo1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
