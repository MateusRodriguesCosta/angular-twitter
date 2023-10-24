import {Injectable} from '@angular/core';
import {User} from "./model/user.class";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {serviceURL} from "./Common/service-url.enum";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  get users(): Observable<User[]> {
    return this.http.get<User[]>(serviceURL.MainUrl + `/users/`);
  }

  public userTweets(userId: string): Observable<User> {
    return this.http.get<User>(serviceURL.MainUrl + `/users/${userId}`);
  }

  public userFollowers(userId: string): Observable<User[]> {
    return this.http.get<User[]>(serviceURL.MainUrl + `/users/${userId}/followers`);
  }

  public userFollowing(userId: string): Observable<User[]> {
    return this.http.get<User[]>(serviceURL.MainUrl + `/users/${userId}/following`);
  }

  get localUser(): User {
    const user = sessionStorage.getItem("current-user");
    if (user) return JSON.parse(user);
    return {} as User;
  }

  set localUser(user: User | null) {
    sessionStorage.setItem("current-user", JSON.stringify(user));
  }
}
