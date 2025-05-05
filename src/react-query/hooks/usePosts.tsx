import { useResource } from './useResource';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const usePosts = () => useResource<Post[]>('posts', 'https://jsonplaceholder.typicode.com/posts');

export default usePosts;
