import React from 'react';

function TaskItem({ task }) {
  return (
    <li>
      <p>{task.task_name}</p>
      <p>{task.task_description}</p>
    </li>
  );
}

export default TaskItem;