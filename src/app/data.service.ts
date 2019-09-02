import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // private artistTopAlbumUrl="http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=cher&api_key=ef8ddf2b7edaf3eee6c3e7c31d0c38fd&format=json";
  private topTrackUrl="http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=India&api_key=ef8ddf2b7edaf3eee6c3e7c31d0c38fd&format=json";
  private topArtistUrl="http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=india&api_key=ef8ddf2b7edaf3eee6c3e7c31d0c38fd&format=json";
  public ArtistName="";
  public TrackName="";
  public trackInfoUrl="";
  constructor(private http:HttpClient) { }
  // getArtistTopAlbum(): Observable<any>{
  //   return this.http.get<any>(this.artistTopAlbumUrl);
  // }
  getTopTrack(): Observable<any>{
    return this.http.get<any>(this.topTrackUrl);
  }
  getTopArtist(): Observable<any>{
    return this.http.get<any>(this.topArtistUrl);
  }
  getArtistName(tName: string,aName: string) {
    this.ArtistName=aName;
    this.TrackName=tName;
    this.trackInfoUrl="http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=ef8ddf2b7edaf3eee6c3e7c31d0c38fd&artist="+this.ArtistName+"&track="+this.TrackName+"&format=json";
  }
  getTrackInfo(): Observable<any>{
    return this.http.get<any>(this.trackInfoUrl);
  }
}
