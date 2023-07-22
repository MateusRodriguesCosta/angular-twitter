import {Injectable} from '@angular/core';
import dummyTweets from "../shared/tweets.dummy.json";
import {Tweet} from "../shared/model/tweet.class";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  private _tweets: Tweet[];

  constructor() {
    this._tweets = dummyTweets.sort((a: Tweet, b: Tweet) => {
      return +new Date(b.date) - +new Date(a.date)
    });
  }

  public get tweets(): Observable<Tweet[]> {
    return of(this._tweets);
  }

  public addTweet(tweet: Tweet): void {
    this._tweets.push(tweet);
  }

}
