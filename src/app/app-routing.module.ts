import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistTopAlbumComponent } from './artist-top-album/artist-top-album.component';
import { ChartsComponent } from './charts/charts.component';
import { EventsComponent } from './events/events.component';
import { ProfileComponent } from './profile/profile.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TrackinfoComponent } from './trackinfo/trackinfo.component';
import { Trackinfo1Component } from './trackinfo1/trackinfo1.component';
import { SearchinfoComponent } from './searchinfo/searchinfo.component';
import { ArtistlistComponent } from './artistlist/artistlist.component';
import { ArtistdetailsComponent } from './artistdetails/artistdetails.component';


const routes: Routes = [
  {path:'',redirectTo:'/music',pathMatch: 'full'},
  {path: 'music', component: ArtistTopAlbumComponent,
  children:[{path:'artistas', component:ArtistlistComponent}]
  },
  {path:'chart',component: ChartsComponent},
  {path:'events',component: EventsComponent},
  {path:'profile',component: ProfileComponent},
  {
    path:'trackinfo',
    component: TrackinfoComponent,
    children:[
      {path:'overview', component:Trackinfo1Component}
    ]
  },
  {path:'search/:name',component:SearchinfoComponent},
  {path:'artistinfo',component: ArtistdetailsComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[ArtistTopAlbumComponent,ChartsComponent,
                                EventsComponent,ProfileComponent,
                                PagenotfoundComponent,TrackinfoComponent,
                                Trackinfo1Component,SearchinfoComponent,
                                ArtistlistComponent,ArtistdetailsComponent]
