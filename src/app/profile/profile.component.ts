import { Component } from '@angular/core';
import {UserService} from "../shared/user.service";
import {User} from "../shared/model/user.class";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  user: User | null;
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  constructor(private userService: UserService) {
    this.user = userService.user;
  }
}
