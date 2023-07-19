import {User} from "./user.class";

export class Comment {
  id: string;
  user: User;
  value: string;
  date: string;

  constructor(id: string, user: User, value: string, date: string) {
    this.id = id;
    this.user = user;
    this.value = value;
    this.date = date;
  }

}
