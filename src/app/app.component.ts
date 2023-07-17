import {Component, OnInit} from '@angular/core';
import {User} from "./shared/model/user.class";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  user: User;
  ngOnInit() {
    this.user = new User("id", "John Wayne", "johnw@outlook.com", "hispass", "somewhere");
  }
}
