import React, { useState, useEffect } from "react";
import "./App.css";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";
import ProfilePictureUpload from "./components/ProfilePicture";
import { createTask, updateTask, deleteTask, subscribeToTasks } from "./Utils/Database";

function App() {
  // State variable to store tasks
  const [tasks, setTasks] = useState([]); // State variable to store tasks data


  // Uncomment when Firebase is stablished -------------------------------------------------------
  
  // // Effect hook to fetch tasks data from Firestore and update the state
  // useEffect(() => {
  //   // Subscribe to changes in the 'tasks' collection and update the state accordingly
  //   const unsubscribe = subscribeToTasks(setTasks);

  //   // Unsubscribe from the snapshot listener when the component unmounts
  //   return () => unsubscribe();
  // }, []); // Empty dependency array ensures that the effect runs only once, on component mount


  // Render the component
  return (
    <div className="App">

      {/* Uncomment when Firebase is stablished -------------------------------------------------------*/} 

      {/* Component for uploading profile pictures */}
      {/* <ProfilePictureUpload/> */}

      {/* Component for adding new tasks */}
      <TaskForm createTask={createTask} />
      {/* Render the list of tasks */}
      {tasks.map((task) => (
        <Task key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default App;
