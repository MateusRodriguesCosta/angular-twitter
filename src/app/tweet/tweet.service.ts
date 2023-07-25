import {Injectable} from '@angular/core';
import dummyTweets from "../shared/tweets.dummy.json";
import {Tweet} from "../shared/model/tweet.class";
import {Observable, of} from "rxjs";
import {UserService} from "../shared/user.service";

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  private _tweets: Tweet[];

  constructor(private userService: UserService) {
    this._tweets = dummyTweets;
    this.sortTweets();
  }

  public get tweets(): Observable<Tweet[]> {
    return of(this._tweets);
  }

  public addTweet(tweet: Tweet): void {
    if(this.userService.user) {
      tweet.user = this.userService.user;
      this._tweets.push(tweet);
      this.sortTweets();
    }
  }

  public addLike(tweetId: string) {
    const index = this._tweets.findIndex(t => t.id == tweetId);
    this._tweets[index].likes += 1;
  }

  private sortTweets(){
    this._tweets = this._tweets.sort((a: Tweet, b: Tweet) => {
      return +new Date(b.date) - +new Date(a.date)
    });
  }

}
