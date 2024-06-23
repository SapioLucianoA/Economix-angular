export class ClientRecord{
  // String name, String lastName, String email, String password
  name: String;
  lastName: String;
  email: String;
  password: String;

  constructor(name: String, lastName: String, email: String, password: String){
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}