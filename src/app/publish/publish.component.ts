import {Component, EventEmitter, Output} from '@angular/core';
import {TweetService} from "../tweet/tweet.service";
import {Tweet} from "../shared/model/tweet.class";
import {UserService} from "../shared/user.service";

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent {

  @Output()
  tweetEvent: EventEmitter<Tweet> = new EventEmitter<Tweet>();
  TWEET_MAX_LENGTH: number = 280;
  TWEET: string = '';
  constructor(private tweetService: TweetService,
              private userService: UserService) {
  }

  onTweetClick(): void {
    if (!this.TWEET) return;
    let tweet = new Tweet('teste', this.TWEET, new Date().toString(),0,[]);
    tweet.user = this.userService.localUser;
    this.tweetService.addTweet(tweet).subscribe(
      (tweet: Tweet) => {
        this.tweetEvent.emit(tweet);
      });
  }

  get charactersLeft(): string {
    return `You have left ${this.TWEET_MAX_LENGTH - this.TWEET.length} characters`;
  }

}
