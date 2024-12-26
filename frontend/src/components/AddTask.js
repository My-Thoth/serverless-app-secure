import React, { useState } from 'react';

function AddTask() {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newTask = { task_name: taskName, task_description: taskDescription };

    const response = await fetch('YOUR_API_GATEWAY_URL', { // Replace with your API Gateway URL
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask),
    });

    if (response.ok) {
      setTaskName('');
      setTaskDescription('');
      // Optionally, refresh task list or show a success message
    } else {
      console.error('Failed to add task');
    }
  };

  return (
    <div>
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <textarea
          placeholder="Task Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;