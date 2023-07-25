import {Component, OnInit} from '@angular/core';
import {TwitterNotificationsService} from "./twitter-notifications.service";
import {TwitterNotification} from "../shared/model/twitter-notification.class";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit{

  notifications: Array<TwitterNotification>;

  constructor(private twitterNotificationsService: TwitterNotificationsService) {
  }
  ngOnInit(): void {
    this.loadNewNotifications();
  }

  loadNewNotifications() {
    this.twitterNotificationsService.notifications.subscribe(
      notifications => this.notifications = notifications
    );
  }

}
