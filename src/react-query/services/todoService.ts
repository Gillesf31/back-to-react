import APIClient from './apiClient';

export type Todo = {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
};

export default new APIClient<Todo>('/todos');
