import {Component, OnInit} from '@angular/core';
import {UserService} from "../shared/user.service";
import {User} from "../shared/model/user.class";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.user = this.userService.localUser;
    this.userService.userFollowers(this.user.id).subscribe(
      (followers: User[]) => {
        this.user.followers = followers
      });
    this.userService.userFollowing(this.user.id).subscribe(
      (following: User[]) => {
        this.user.following = following
      });
  }

  get followers(): number {
    return this.user.followers?.length;
  }

  get following(): number {
    return this.user.following?.length;
  }
}
