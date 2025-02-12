import { useEffect, useMemo, useState } from 'react';
import { TaskForm } from './TaskForm';
import { Tasks } from './Tasks';
import { v4 as uuidv4 } from 'uuid';
import { EditTaskForm } from './EditTaskForm';

export default function TaskWrapper({ filter, priorityFilter }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem('tasks') || [];
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos));
      } catch (err) {
        console.log(err);
        localStorage.removeItem('tasks');
      }
    }
  }, []);
  const saveToLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  const addTodo = (todo) => {
    const newTodos = [
      ...todos,
      { id: uuidv4(), completed: false, isEdited: false, ...todo },
    ];
    setTodos(newTodos);
    saveToLocalStorage(newTodos);
  };

  const markComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(updatedTodos);
    saveToLocalStorage(updatedTodos);
  };

  const deleteTask = (id) => {
    const updatedTasks = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTasks);
    saveToLocalStorage(updatedTasks);
  };

  const editTask = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        isEdited: todo.id === id,
      })),
    );
  };

  const updateTodo = (newValue, id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, ...newValue, isEdited: false } : todo,
    );
    setTodos(updatedTodos);
    saveToLocalStorage(updatedTodos);
  };

  const filteredTodos = useMemo(() => {
    let result = [...todos];

    if (filter === 'todo') {
      result = result.filter((todo) => !todo.completed);
    } else if (filter === 'completed') {
      result = result.filter((todo) => todo.completed);
    }

    if (priorityFilter !== 'all') {
      result = result.filter((todo) => todo.priority === priorityFilter);
    }
    return result;
  }, [filter, priorityFilter, todos]);

  return (
    <div>
      <TaskForm addTodo={addTodo} />{' '}
      <div className="task-card-container">
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) =>
            todo.isEdited ? (
              <EditTaskForm editTodo={updateTodo} task={todo} key={todo.id} />
            ) : (
              <Tasks
                task={todo}
                key={todo.id}
                markComplete={markComplete}
                deleteTask={deleteTask}
                editTask={editTask}
              />
            ),
          )
        ) : (
          <p>There are no tasks!</p>
        )}
      </div>
    </div>
  );
}
