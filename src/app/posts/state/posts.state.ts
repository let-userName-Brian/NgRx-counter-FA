import { Post } from "src/app/models/post.model";

export interface PostState {
  posts: Post[];
};

export const initialState: PostState = {
  posts: [{
    id: '1',
    title: 'First Post',
    description: 'This is the first post'
  },
  {
    id: '2',
    title: 'Second Post',
    description: 'This is the second post'
  }]
};