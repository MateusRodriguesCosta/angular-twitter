import { Injectable } from '@angular/core';
import dummyNotifications from "../shared/data/notifications.dummy.json";
import {TwitterNotification} from "../shared/model/twitter-notification.class";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TwitterNotificationsService {

  private _notifications: TwitterNotification[];

  constructor() {
    this._notifications = dummyNotifications;
    this.sortNotifications();
  }

  get notifications(): Observable<TwitterNotification[]> {
    return of(this._notifications);
  }

  private sortNotifications(){
    this._notifications = this._notifications.sort((a: TwitterNotification, b: TwitterNotification) => {
      return +new Date(b.dateTime) - +new Date(a.dateTime)
    });
  }
}
