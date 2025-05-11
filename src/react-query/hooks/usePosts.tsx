import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const usePosts = (queryKey: string[], filterValue?: any) => {
  const fetchTodos = () =>
    axios
      .get<Post[]>('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.data);

  return useQuery<Post[], Error>({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });
};

export default usePosts;
