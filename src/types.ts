export interface BookReqType {
  title: string;
  author: string;
  message: string;
  url: string;
}

export interface BookResType {
  author: string;
  bookId: number;
  createdAt: string | null;
  deletedAt: string | null;
  message: string;
  ownerId: string;
  title: string;
  updatedAt: string | null;
  url: string;
}

export interface LoginReqType {
  email: string;
  password: string;
}

export interface LoginResType {
  token: string;
}
