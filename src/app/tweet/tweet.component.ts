import {Component, EventEmitter, Output} from '@angular/core';
import {TweetService} from "./tweet.service";
import {Tweet} from "../shared/model/tweet.class";
import {User} from "../shared/model/user.class";

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent {

  @Output()
  tweetEvent = new EventEmitter<any>();
  tweet: string;

  constructor(private tweetService: TweetService) {
  }

  onTweetClick(text: string): void {
    let tweet = new Tweet('test', {} as User, text, new Date().toString(),0,[]);
    this.tweetService.addTweet(tweet);
    console.log(tweet)
    this.tweetEvent.emit();
  }


}
