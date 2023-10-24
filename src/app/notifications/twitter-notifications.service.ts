import { Injectable } from '@angular/core';
import dummyNotifications from "../shared/data/notifications.dummy.json";
import {TwitterNotification} from "../shared/model/twitter-notification.class";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../shared/model/user.class";
import {serviceURL} from "../shared/Common/service-url.enum";
import {UserService} from "../shared/user.service";

@Injectable({
  providedIn: 'root'
})
export class TwitterNotificationsService {

  constructor(private http: HttpClient,
              private userService: UserService) {
  }

  get notifications(): Observable<TwitterNotification[]> {
    return this.http.get<TwitterNotification[]>(serviceURL.MainUrl + `/users/${this.userService.localUser.id}/notifications`);
  }

  addNotification(notification: TwitterNotification): Observable<TwitterNotification> {
    return this.http.post<TwitterNotification>(serviceURL.MainUrl + `/notifications/`, notification);
  }
}
