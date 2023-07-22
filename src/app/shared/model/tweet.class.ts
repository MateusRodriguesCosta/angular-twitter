import {User} from "./user.class";
import {Comment} from "./comment.class";

export class Tweet {
  id: string;
  user: User;
  value: string;
  date: string;
  likes: number;
  comments: Array<Comment>

  constructor(id: string, value: string, date: string, likes: number, comments: Array<Comment>) {
    this.id = id;
    this.value = value;
    this.date = date;
    this.likes = likes;
    this.comments = comments;
  }

}
