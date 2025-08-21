import { useState } from 'react';
import TaskWrapper from '../components/TaskWrapper';

export const Dashboard = () => {
  const [filter, setFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('High');
  return (
    <div className='cont'>
      <div className="filter-container">
        {' '}
        <div className="filter-buttons">
          <div>
            <button value="all" onClick={(e) => setFilter(e.target.value)}>
              All
            </button>
            <button value="todo" onClick={(e) => setFilter(e.target.value)}>
              TODO
            </button>
            <button
              value="completed"
              onClick={(e) => setFilter(e.target.value)}
            >
              DONE
            </button>
          </div>

          <div>
            <button
              value="High"
              onClick={(e) => setPriorityFilter(e.target.value)}
            >
              HIGH
            </button>
            <button
              value="Medium"
              onClick={(e) => setPriorityFilter(e.target.value)}
            >
              MEDIUM
            </button>
            <button
              value="Low"
              onClick={(e) => setPriorityFilter(e.target.value)}
            >
              LOW
            </button>{' '}
          </div>
        </div>
      </div>
      <TaskWrapper filter={filter} priorityFilter={priorityFilter} />{' '}
    </div>
  );
};
