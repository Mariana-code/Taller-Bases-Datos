import React, { useState } from "react";

// Functional component for rendering a form to create a new task
const TaskForm = ({ createTask }) => {
  // State variables for the new task's name and priority
  const [newName, setNewName] = useState(""); // State for task name input
  const [newPriority, setNewPriority] = useState(0); // State for task priority input

  // Handler function for name input change
  const handleNameChange = (event) => {
    setNewName(event.target.value); // Update new task name state
  };

  // Handler function for priority input change
  const handlePriorityChange = (event) => {
    setNewPriority(event.target.value); // Update new task priority state
  };

  // Handler function for form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    try {
      // Create new task
      createTask(newName, newPriority);
      // Clear form fields
      setNewName("");
      setNewPriority(0);
    } catch (error) {
      console.error('Error creating Task:', error); // Log error to console
      // You can add additional error handling here, such as displaying an error message to the task
    }
  };

  // Render task creation form
  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for task name */}
      <input placeholder="Task Name..." value={newName} onChange={handleNameChange} />
      {/* Input field for task priority */}
      <input type="number" placeholder="Priority..." value={newPriority} onChange={handlePriorityChange} />
      {/* Submit button */}
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;
