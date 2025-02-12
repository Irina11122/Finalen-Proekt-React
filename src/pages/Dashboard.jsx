import { useState } from 'react';
import TaskWrapper from '../components/TaskWrapper';

export const Dashboard = () => {
  const [filter, setFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  return (
    <div>
      <div className="filter-container">
        {' '}
        <div>
          <select onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="todo">To Do</option>
            <option value="completed">Completed</option>
          </select>

          <select onChange={(e) => setPriorityFilter(e.target.value)}>
            <option value="all">All Priorities</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      </div>
      <TaskWrapper filter={filter} priorityFilter={priorityFilter} />{' '}
    </div>
  );
};
