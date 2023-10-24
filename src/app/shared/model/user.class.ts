export class User {
  id: string;
  name: string;
  email: string;
  password: string;
  address: string;
  phone: String;
  bio: string;
  joinedDate: string;
  verifiedAccount: boolean;
  followers: User[];
  following: User[];

  constructor(id: string, name: string, email: string, password: string, address: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.address = address;
  }

}
