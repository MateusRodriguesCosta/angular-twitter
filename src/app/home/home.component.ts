import {Component, OnInit} from '@angular/core';
import {UserService} from "../shared/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  ngOnInit() {
      this.userService.users.subscribe(users => {
        this.userService.localUser = users[0];
      });
  }
}
