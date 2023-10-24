import {Injectable} from '@angular/core';
import {Tweet} from "../shared/model/tweet.class";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {serviceURL} from "../shared/Common/service-url.enum";

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(private http: HttpClient) {
  }

  public get tweets(): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(serviceURL.MainUrl + `/tweets/`);
  }

  public addTweet(tweet: Tweet): Observable<Tweet> {
    return this.http.post<Tweet>(serviceURL.MainUrl + `/tweets/`, tweet);
  }

  public addLike(tweetId: string) {
    return this.http.patch<Tweet>(serviceURL.MainUrl + `/tweets/like/${tweetId}`, null);
  }

}
