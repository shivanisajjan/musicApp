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
  public multipledata=[];
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
  check(m){
    this.getjsondata()
    .subscribe(data => {
      this.multipledata = data
        let flag=1;
        for (let i=0;i< this.multipledata.length && flag===1 ;i++) {
          if(m['mbid']===this.multipledata[i]['mbid'])
          {
            flag=0;
            alert("Present in My favorite");
          }
        }
        if(flag===1){
        this.postto(m).subscribe();
        alert("Added successfully");}
    }); // async call : API call    
  }
  postto(i){
    return this.http.post('http://localhost:3000/attr',i);
  }
  postto1(i){
    return this.http.post('http://localhost:3000/attr1',i);
  }
  private datajsonUrl="http://localhost:3000/attr";
  private datajson1Url="http://localhost:3000/attr1";
  getjsondata(): Observable<any>{
    return this.http.get<any>(this.datajsonUrl);
  }
  getjsondata1(): Observable<any>{
    return this.http.get<any>(this.datajson1Url);
  }
  removefavo(id:number):Observable<any>{
    return this.http.delete<any>(`${'http://localhost:3000/attr'}/${id}`);
  }
  removefavo1(id:number):Observable<any>{
    return this.http.delete<any>(`${'http://localhost:3000/attr1'}/${id}`);
  }
}