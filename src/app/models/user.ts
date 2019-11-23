export interface User {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

export interface State {
  users: User[];
  // user: User;
}
