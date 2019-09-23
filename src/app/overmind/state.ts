export type Comment = {
  id: string;
  name: string;
  email: string;
};

export type Post = {
  userId: number;
  id: string;
  title: string;
  body: string;
};

type State = {
  comments: Comment[];
  posts: Post[];
};

export const state: State = {
  comments: null,
  posts: null
};
