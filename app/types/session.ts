export interface UserSession {
  accessToken: string;
  exp: number;
  user: {
    fullName: string;
    email: string;
    _id: string;
    avatar: string;
  };
}
