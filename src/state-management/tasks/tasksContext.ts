import { createContext, Dispatch } from 'react';
import { Task, TaskAction } from '../tasks/taskListReducer';

type TasksContextType = {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
};

const TasksContext = createContext<TasksContextType>({} as TasksContextType);

export default TasksContext;
