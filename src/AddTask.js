import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function AddTask({ tasks, setTasks }){
    const [task, setTask] = useState('');
  
    const addTask = () => {
      if (task.trim()) {
        const newTasks = [...tasks, { id: Date.now(), text: task, done: true }];
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
        setTask('');
      }
    };
  
    return (
      <div className="add-task-container colorful-container">
        <h2>Add Task</h2>
        <div className="task-input">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a new task"
          />
          <button onClick={addTask} className="primary-button">Add Task</button>
        </div>
        <Link to="/tasks" className="link-button">View Tasks</Link>
      </div>
    );
  };
  