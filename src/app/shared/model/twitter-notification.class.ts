import {User} from "./user.class";

export class TwitterNotification {
  id: string;
  type: string;
  user: User;
  dateTime: string;

  constructor(id: string, type: string, user: User, dateTime: string) {
    this.id = id;
    this.type = type;
    this.user = user;
    this.dateTime = dateTime;
  }

}
