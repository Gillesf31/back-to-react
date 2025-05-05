import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type Todo = {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
};

export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await axios.get<Todo[]>(
    'https://jsonplaceholder.typicode.com/todos'
  );
  return response.data;
};

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    staleTime: 10_000,
  });
};

export default useTodos;
