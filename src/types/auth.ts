export interface IUser {
  id: string;
  email: string;
  name: string;
  avatar: string;
  token: string;
}

export interface ISignInError {
  message: string;
}
