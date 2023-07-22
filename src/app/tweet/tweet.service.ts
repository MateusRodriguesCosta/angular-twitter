import { Injectable } from '@angular/core';
import dummyTweets from "../shared/tweets.dummy.json";
import {Tweet} from "../shared/model/tweet.class";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor() { }

  public get tweets(): Observable<Tweet[]> {
    return of(dummyTweets.sort((a: Tweet, b: Tweet) => {
      return +new Date(b.date) - +new Date(a.date)
    }));
  }

}
