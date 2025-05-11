import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const usePosts = (userId: number | undefined) => {
  console.log(userId);
  const fetchPosts = () =>
    axios
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
        params: {
          userId,
        },
      })
      .then((response) => response.data);

  return useQuery<Post[], Error>({
    queryKey: userId ? ['users', userId, 'posts'] : ['posts'],
    queryFn: fetchPosts,
  });
};

export default usePosts;
