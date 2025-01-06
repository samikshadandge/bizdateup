
import {Link} from  'react-router-dom';
export default function TaskList ({ tasks, setTasks }) {
    const toggleTaskStatus = (id) => {
      const updatedTasks = tasks.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      );
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };
  
    const deleteTask = (id) => {
      const updatedTasks = tasks.filter((t) => t.id !== id);
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };
  
    return (
      <div className="task-list-container colorful-container">
        <h2>Task List</h2>
        <div className="task-list">
          {tasks.map((t) => (
            <div key={t.id} className={`task-item ${t.done ? 'done' : ''}`}>
              <span className={`task-text ${t.done ? '' : 'done'}`}>{t.text}</span>
              <div className="task-actions">
                <button onClick={() => toggleTaskStatus(t.id)} className={`status-btn ${t.done ? 'done' : 'not-done'}`}>
                  {t.done ? 'Not Done' : 'Done'}
                </button>
                <button onClick={() => deleteTask(t.id)} className="delete-btn">Delete</button>
              </div>
            </div>
          ))}
        </div>
        <Link to="/" className="link-button white-button">Add Task</Link>
      </div>
    );
  };
  