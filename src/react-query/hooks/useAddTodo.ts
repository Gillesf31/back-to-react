import { useMutation, useQueryClient } from '@tanstack/react-query';
import APIClient from '../services/apiClient';
import { CACHE_KEY_TODOS } from './constants';
import { Todo } from './useTodos';

type AddTodoContext = {
  previousTodo: Todo[];
};

const apiClient = new APIClient<Todo>('/todos');

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: (todo: Todo) => apiClient.post(todo),
    onMutate: (newTodo) => {
      const previousTodo =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => {
        return [newTodo, ...todos];
      });

      onAdd();

      return { previousTodo };
    },
    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) => {
        return todos?.map((todo) => {
          if (savedTodo === newTodo) {
            return savedTodo;
          }
          return todo;
        });
      });
    },
    onError: (error, newTodo, context) => {
      if (!context) return;

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodo);
    },
  });
};

export default useAddTodo;
