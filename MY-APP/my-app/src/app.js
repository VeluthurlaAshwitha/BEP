import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [tasks, setTasks] = useState([]);  
  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const [filter, setFilter] = useState('all');

  // Handle input changes for new task
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  // Add a new task to the list
  const addTask = () => {
    if (newTask.title) {
      setTasks([...tasks, { ...newTask, completed: false, id: Date.now() }]);
      setNewTask({ title: '', description: '' }); 
    }
  };

  // Toggle task completion status
  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Delete a task
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };
//props
  // Filter tasks based on their status
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'complete') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true; // 'all' case
  });


  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Manager</h1>

        {/* Task Input Form */}
        <div className="task-input">
          <input
            type="text"
            name="title"
            placeholder="Task title"
            value={newTask.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Task description"
            value={newTask.description}
            onChange={handleInputChange}
          />
          <button onClick={addTask}>Add Task</button>
        </div>

        {/* Filter Buttons */}
        <div className="task-filter">
          <button onClick={() => setFilter('all')}>All</button>
          <button onClick={() => setFilter('complete')}>Completed</button>
          <button onClick={() => setFilter('incomplete')}>Incomplete</button>
        </div>

        {/* Task List */}
        <ul className="task-list">
          {filteredTasks.map((task) => (
            <li key={task.id} className={task.completed ? 'completed' : ''}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <button onClick={() => toggleTaskCompletion(task.id)}>
                {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
              </button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
