import {User} from "./user.class";

export class Comment {
  id: string;
  user: User;
  value: string;
  date: Date;

  constructor(id: string, user: User, value: string, date: Date) {
    this.id = id;
    this.user = user;
    this.value = value;
    this.date = date;
  }

}
