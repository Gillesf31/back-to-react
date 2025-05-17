import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useRef } from 'react';
import { Todo } from './hooks/useTodos';

const TodoForm = () => {
  const queryClient = useQueryClient();
  const addTodo = useMutation({
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
    },
  });
  const ref = useRef<HTMLInputElement>(null);

  return (
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
        <button className='btn btn-primary'>Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
