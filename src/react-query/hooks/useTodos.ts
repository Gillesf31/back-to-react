import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/apiClient';
import { CACHE_KEY_TODOS } from './constants';

export type Todo = {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
};

const apiClient = new APIClient<Todo>('/todos');

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: apiClient.getAll,
  });
};

export default useTodos;
