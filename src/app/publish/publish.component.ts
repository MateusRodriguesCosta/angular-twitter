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
  tweetEvent = new EventEmitter<any>();

  constructor(private tweetService: TweetService) {
  }

  onTweetClick(text: string): void {
    if (!text) return;
    let tweet = new Tweet('test', text, new Date().toString(),0,[]);
    this.tweetService.addTweet(tweet);
    this.tweetEvent.emit();
  }

}
