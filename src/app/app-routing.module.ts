import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistTopAlbumComponent } from './artist-top-album/artist-top-album.component';
import { ChartsComponent } from './charts/charts.component';
import { EventsComponent } from './events/events.component';
import { ProfileComponent } from './profile/profile.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path:'',redirectTo:'/music',pathMatch: 'full'},
  {path: 'music', component: ArtistTopAlbumComponent},
  {path:'chart',component: ChartsComponent},
  {path:'events',component: EventsComponent},
  {path:'profile',component: ProfileComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[ArtistTopAlbumComponent,ChartsComponent,
                                EventsComponent,ProfileComponent,
                                PagenotfoundComponent]
