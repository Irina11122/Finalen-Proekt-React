import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
export const Tasks = ({ task, markComplete, deleteTask, editTask }) => {
  return (
    <div className="task-card">
      <div>
        <p
          className={task.completed ? 'completed' : ''}
          onClick={() => markComplete(task.id)}
          style={{ cursor: 'pointer' }}
        >
          {' '}
          {task.task}{' '}
        </p>
        <p> Date: {task.dueDate} </p>
        <p> Priority: {task.priority}</p>
        <p> Description: {task.description} </p>
      </div>
      <div className="task-btn-container">
        <button onClick={() => editTask(task.id)}>
          {' '}
          <FontAwesomeIcon icon={faPenToSquare} color="orange" />{' '}
        </button>
        <button onClick={() => deleteTask(task.id)}>
          {' '}
          <FontAwesomeIcon icon={faTrash} color="darkred" />{' '}
        </button>
      </div>
    </div>
  );
};
