import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const saved_Tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(saved_Tasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }
    const task = { id: Date.now(), text: newTask, done: false };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="task-list">
        {tasks.length === 0 ? (
          <p className="no-tasks">No tasks added yet!</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="task-item">
              <span className={task.done ? "task-text done" : "task-text"}>
                {task.text}
              </span>
              <button
                className={task.done ? "status-btn done" : "status-btn not-done"}
                onClick={() => toggleTask(task.id)}
              >
                {task.done ? "Done" : "Not Done"}
              </button>
              <button onClick={() => deleteTask(task.id)} className="delete-btn">
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
