import useTasks from './hooks/useTasks';
import { addTaskAction, deleteTaskAction } from './reducers/taskListReducer';

const TaskList = () => {
  const { tasks, dispatch } = useTasks();

  return (
    <>
      <button
        onClick={() =>
          dispatch(
            addTaskAction({ id: Date.now(), title: Date.now().toString() })
          )
        }
        className='btn btn-primary my-3'
      >
        Add Task
      </button>
      <ul className='list-group'>
        {tasks.map((task) => (
          <li
            key={task.id}
            className='list-group-item d-flex justify-content-between'
          >
            <span className='flex-grow-1'>{task.title}</span>
            <button
              className='btn btn-outline-danger'
              onClick={() => dispatch(deleteTaskAction(task.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
