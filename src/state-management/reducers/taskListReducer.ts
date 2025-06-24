export type Task = {
  id: number;
  title: string;
};

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';

type AddTaskAction = {
  type: typeof ADD_TASK;
  payload: Task;
};

type DeleteTaskAction = {
  type: typeof DELETE_TASK;
  payload: number;
};

type TaskAction = AddTaskAction | DeleteTaskAction;

export const addTaskAction = (task: Task) =>
  ({
    type: ADD_TASK,
    payload: task,
  } as const);

export const deleteTaskAction = (id: number) =>
  ({
    type: DELETE_TASK,
    payload: id,
  } as const);

const taskListReducer = (state: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case DELETE_TASK:
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};

export default taskListReducer;
