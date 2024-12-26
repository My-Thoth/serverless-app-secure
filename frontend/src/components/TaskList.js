import React, { useEffect, useState } from 'react';
import TaskItem from './TaskItem';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('YOUR_API_GATEWAY_URL');  // Replace with your API Gateway URL
      const data = await response.json();
      setTasks(data);
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.task_id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;