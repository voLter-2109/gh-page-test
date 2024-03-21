export interface IResponsePlaceholder {
  userId: number;
  id: number;
  title: string;
  body: string;
  image: string;
}

export interface PostResponse extends IResponsePlaceholder {}
