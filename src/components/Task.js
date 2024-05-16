import React from "react";

// Functional component for rendering a task's task
const Task = ({ task, updateTask, deleteTask }) => {
  // Render the task's task details
  return (
    <div>
      <div className="container">
        {/* Display task name */}
        <h1>Task: {task.name}</h1>
        {/* Display task priority */}
        <h1>Priority: {task.priority}</h1>
      </div>
      {/* Button to increase task priority */}
      <button onClick={() => updateTask(task.id, task.priority, 'increase')}>Increase Priority</button>
      {/* Button to decrease task priority */}
      <button onClick={() => updateTask(task.id, task.priority, 'decrease')}>Decrease Priority</button>
      {/* Button to delete the task */}
      <button onClick={() => deleteTask(task.id)}>Delete Task</button>
    </div>
  );
};

export default Task;
