import { Injectable } from '@angular/core';
import {User} from "./model/user.class";
import dummyUser from "./user.dummy.json";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
    this.user = dummyUser;
  }

  get user(): User | null {
    const user = sessionStorage.getItem("current-user");
    if (user) return JSON.parse(user);
    return null;
  }

  set user(user: User | null) {
    sessionStorage.setItem("current-user", JSON.stringify(user));
  }
}
