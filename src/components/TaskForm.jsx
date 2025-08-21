import { useState } from 'react';

export const TaskForm = ({ addTodo }) => {
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('High');
  const [description, setDescription] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setTask('');
    setDescription('');
    setDueDate('');
    setPriority('High');

    const newTasks = {
      task,
      description,
      priority,
      dueDate,
    };

    addTodo(newTasks);
  };

  return (
    <div>
      <form className="task-form-container" onSubmit={handleSubmit}>
        {' '}
        <div>
          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="text"
            placeholder="Describe the task"
          />
          <select onChange={(e) => setPriority(e.target.value)}>
            <option value="High"> High </option>
            <option value="Medium"> Medium </option>
            <option value="Low"> Low </option>
          </select>
          <input
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
            type="date"
            placeholder="What do you want to do?"
          />
        </div>
        <div>
          {' '}
          <input
            onChange={(e) => setTask(e.target.value)}
            value={task}
            type="text"
            placeholder="What do you want to do?" className='add-input'
          />{' '}
          <button className='add-btn' type="submit"> Add Task </button>
        </div>
      </form>
    </div>
  );
};
