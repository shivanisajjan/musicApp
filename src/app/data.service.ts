import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private topTrackUrl="http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=India&limit=1000&api_key=ef8ddf2b7edaf3eee6c3e7c31d0c38fd&format=json";
  private topArtistUrl="http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=india&limit=1000&api_key=ef8ddf2b7edaf3eee6c3e7c31d0c38fd&format=json";
  public ArtistName="";
  public ArtistName1="";
  public TrackName="";
  public trackInfoUrl="";
  private chartTopTrackUrl="http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=ef8ddf2b7edaf3eee6c3e7c31d0c38fd&format=json";
  private chartTopArtistUrl="http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=ef8ddf2b7edaf3eee6c3e7c31d0c38fd&format=json";
  private chartTopTagsUrl="http://ws.audioscrobbler.com/2.0/?method=chart.gettoptags&api_key=ef8ddf2b7edaf3eee6c3e7c31d0c38fd&format=json";
  public trackSearchUrl="";
  public ArtistInfoUrl="";
  public s1="";
  public s11:string;
  constructor(private http:HttpClient) { }
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
  getartistdetails(sname:string){
    this.ArtistName1=sname;
    this.ArtistInfoUrl="http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist="+this.ArtistName1+"&api_key=ef8ddf2b7edaf3eee6c3e7c31d0c38fd&format=json";
  }
  getTrackInfo(): Observable<any>{
    return this.http.get<any>(this.trackInfoUrl);
  }
  getArtistInfo(): Observable<any>{
    return this.http.get<any>(this.ArtistInfoUrl);
  }
  getChartTopTrack():Observable<any>{
    return this.http.get<any>(this.chartTopTrackUrl);
  }
  getChartTopArtist():Observable<any>{
    return this.http.get<any>(this.chartTopArtistUrl);
  }
  getChartTopTags():Observable<any>{
    return this.http.get<any>(this.chartTopTagsUrl);
  }
  getSearchInfo(sname:string){
    this.s11=sname;
    this.trackSearchUrl="http://ws.audioscrobbler.com/2.0/?method=track.search&track="+this.s11+"&api_key=ef8ddf2b7edaf3eee6c3e7c31d0c38fd&format=json";
  }
  getSearchInfo1(): Observable<any>{
    return this.http.get<any>(this.trackSearchUrl);
  }
}
