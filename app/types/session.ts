export interface UserSession {
  accessToken: string;
  user: {
    fullName: string;
    email: string;
    _id: string;
    avatar: string;
  };
}
