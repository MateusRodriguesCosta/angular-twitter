import {Component, OnInit} from '@angular/core';
import {User} from "../shared/model/user.class";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User;
  ngOnInit() {
    this.user = new User("id", "John Wayne", "johnw@outlook.com", "hispass", "somewhere");
  }
}
