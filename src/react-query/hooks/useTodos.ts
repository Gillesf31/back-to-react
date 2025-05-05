import { useResource } from './useResource';

type Todo = {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
};

const useTodos = () =>
  useResource<Todo[]>('todos', 'https://jsonplaceholder.typicode.com/todos');

export default useTodos;
