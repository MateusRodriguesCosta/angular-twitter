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

  constructor(private tweetService: TweetService) {
  }

  onTweetClick(text: string): void {
    console.log(text)
    let tweet = new Tweet('test', text, new Date().toString(),0,[]);
    this.tweetService.addTweet(tweet);
    this.tweetEvent.emit();
  }


}
