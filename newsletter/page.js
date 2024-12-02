"use client";
import { useState, useEffect } from "react";
import SideBarNav from "../(home)/_components/SideBarNav"; // Sidebar component import
import styles from './page.css'; // Correct path to your CSS file

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    status: 'Pending',
  });

  const [alertMessage, setAlertMessage] = useState('');

  // Save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks)); // Load saved tasks from localStorage
    }
  }, []);

  // Save tasks to localStorage whenever tasks are added/modified
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.title && newTask.dueDate) {
      const task = { ...newTask, id: Date.now() };
      setTasks([...tasks, task]);
      setNewTask({ title: '', description: '', dueDate: '', status: 'Pending' });
    }
  };

  const handleToggleStatus = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' } : task));
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  useEffect(() => {
    const today = new Date();
    const dueSoonTasks = tasks.filter(task => new Date(task.dueDate) <= today && task.status === 'Pending');
    if (dueSoonTasks.length > 0) {
      setAlertMessage('You have tasks due today or soon!');
    } else {
      setAlertMessage('');
    }
  }, [tasks]);

  return (
    <div className="pageContainer">
      {/* Sidebar on the left */}
      <SideBarNav /> {/* Sidebar component */}
      
      <div className="contentContainer">
        <h1>Study Task Manager</h1>

        {/* Task Input Form */}
        <div className="taskForm">
          <input
            type="text"
            placeholder="Task Title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            className="taskInput"
          />
          <input
            type="text"
            placeholder="Description (optional)"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            className="taskInput"
          />
          <input
            type="date"
            value={newTask.dueDate}
            onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
            className="taskInput"
          />
          <button onClick={handleAddTask} className={styles.addTaskButton}>Add Task</button>
        </div>

        {/* Task Reminder Alert */}
        {alertMessage && (
          <div className="alert">
            <p>{alertMessage}</p>
          </div>
        )}

        {/* Task List */}
        <div className="taskList">
          {tasks.map((task) => (
            <div key={task.id} className="taskItem">
              <div className="taskDetails">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <p><strong>Due: </strong>{new Date(task.dueDate).toLocaleDateString()}</p>
              </div>

              <div className="taskActions">
                <button onClick={() => handleToggleStatus(task.id)} className="toggleStatusButton">
                  {task.status}
                </button>
                <button onClick={() => handleDeleteTask(task.id)} className="deleteButton">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TasksPage;
