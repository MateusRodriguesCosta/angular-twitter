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
    this.tweetService.addLike(tweetId).subscribe(
      (tweet: Tweet) => {
        this.tweet = tweet;
      });
  }

  get hasLikes() {
    return (this.tweet.likes > 0);
  }

  get hasComments() {
    return (this.tweet.comments?.length > 0);
  }

  get likesDisplay() {
    return this.hasLikes? this.tweet.likes : '';
  }

  get commentsDisplay() {
    return this.hasComments? this.tweet.comments.length : '';
  }

  get likesColor() {
    return this.hasLikes? 'red' : '#888888';
  }

  get commentsColor() {
    return this.hasComments? '#125699' : '#888888';
  }

}
