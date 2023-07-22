import {Component, Input} from '@angular/core';
import {Tweet} from "../shared/model/tweet.class";

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent {

  @Input()
  tweet: Tweet;

}
