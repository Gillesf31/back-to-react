import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type PostQuery = {
  page: number;
  pageSize: number;
};

const usePosts = ({ page, pageSize }: PostQuery) => {
  const fetchPosts = () =>
    axios
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _start: (page - 1) * pageSize,
          _limit: pageSize,
        },
      })
      .then((response) => response.data);

  return useQuery<Post[], Error>({
    queryKey: ['posts', page, pageSize],
    queryFn: fetchPosts,
    keepPreviousData: true,
  });
};

export default usePosts;
