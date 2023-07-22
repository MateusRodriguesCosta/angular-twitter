import {Component, OnInit} from '@angular/core';
import {Tweet} from "../shared/model/tweet.class";
import {TweetService} from "../tweet/tweet.service";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  tweets: Array<Tweet>;

  constructor(private tweetService: TweetService) {
  }

  ngOnInit(): void {
    this.loadNewTweets();
  }

  loadNewTweets() {
    this.tweetService.tweets.subscribe(
      tweets => this.tweets = tweets
    );
  }


}
