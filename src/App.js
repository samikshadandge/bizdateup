
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import TaskList from './TaskList';
import AddTask from './AddTask';
const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  return (
    <Router>
      <div className="app colorful-container">
        <h1>Task Management</h1>
        <Routes>
          <Route path="/" element={<AddTask tasks={tasks} setTasks={setTasks} />} />
          <Route path="/tasks" element={<TaskList tasks={tasks} setTasks={setTasks} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
