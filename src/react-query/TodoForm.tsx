import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useRef } from 'react';
import { Todo } from './hooks/useTodos';

const TodoForm = () => {
  const queryClient = useQueryClient();
  const ref = useRef<HTMLInputElement>(null);

  const addTodo = useMutation<Todo, Error, Todo>({
    mutationFn: (todo: Todo) => {
      return axios
        .post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
        .then((res) => res.data);
    },
    onSuccess: (savedTodo, newTodo) => {
      // Invalidate the todos query
      //   queryClient.invalidateQueries({
      //     queryKey: ['todos'],
      //   });
      queryClient.setQueryData<Todo[]>(['todos'], (oldData) => {
        if (!oldData) return [savedTodo];
        return [savedTodo, ...oldData];
      });

      if (ref.current) ref.current.value = '';
    },
  });

  return (
    <>
      {addTodo.error && (
        <div className='alert alert-danger'>{addTodo.error.message}</div>
      )}
      <form
        className='row mb-3'
        onSubmit={(event) => {
          event.preventDefault();

          if (!ref.current?.value) return;

          addTodo.mutate({
            id: 0,
            title: ref.current?.value,
            completed: false,
            userId: 1,
          });
        }}
      >
        <div className='col'>
          <input type='text' className='form-control' ref={ref} />
        </div>
        <div className='col'>
          <button className='btn btn-primary' disabled={addTodo.isLoading}>
            {addTodo.isLoading ? 'Adding...' : 'Add'}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
