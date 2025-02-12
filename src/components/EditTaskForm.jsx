import { useState } from 'react';

export const EditTaskForm = ({ editTodo, task: taskData }) => {
  const [task, setTask] = useState(taskData.task);
  const [dueDate, setDueDate] = useState(taskData.dueDate || '');
  const [description, setDescription] = useState(taskData.description || '');
  const [priority, setPriority] = useState(taskData.priority || 'Low');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTasks = {
      task,
      dueDate,
      description,
      priority,
    };

    editTodo(newTasks, taskData.id);
    console.log(newTasks, priority);
    setTask('');
    setPriority('Low');
    setDescription('');
    setDueDate('');
  };

  return (
    <div className="edit-main-container">
      <form className="edit-form-container" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTask(e.target.value)}
          value={task}
          type="text"
          placeholder="Update the Task!"
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          placeholder="Update of the Description of the Task"
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High"> High </option>
          <option value="Medium"> Medium </option>
          <option value="Low"> Low </option>
        </select>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button type="submit"> Update Task </button>
      </form>
    </div>
  );
};
