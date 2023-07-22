import {Component, Input} from '@angular/core';
import {Tweet} from "../shared/model/tweet.class";
import {TweetService} from "./tweet.service";

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent {

  @Input()
  tweet: Tweet;

  constructor(private tweetService: TweetService) {
  }
  onLikeClick(tweetId: string){
    this.tweetService.addLike(tweetId);
  }

}
