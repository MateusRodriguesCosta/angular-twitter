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
      notifications => {
        this.notifications = notifications;
        this.sortNotifications();
      }
    );
  }

  private sortNotifications(){
    this.notifications = this.notifications.sort((a: TwitterNotification, b: TwitterNotification) => {
      return +new Date(b.dateTime) - +new Date(a.dateTime)
    });
  }

  protected get dateTime() {
    return new Date();
  }

}
