import {Component, EventEmitter, Output} from '@angular/core';
import {TweetService} from "../tweet/tweet.service";
import {Tweet} from "../shared/model/tweet.class";

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent {

  @Output()
  tweetEvent: EventEmitter<any> = new EventEmitter<any>();
  TWEET_MAX_LENGTH: number = 280;
  TWEET: string = '';
  constructor(private tweetService: TweetService) {
  }

  onTweetClick(): void {
    if (!this.TWEET) return;
    let tweet = new Tweet('test', this.TWEET, new Date().toString(),0,[]);
    this.tweetService.addTweet(tweet);
    this.tweetEvent.emit();
  }

  get charactersLeft(): string {
    return `You have left ${this.TWEET_MAX_LENGTH - this.TWEET.length} characters`;
  }

}
