import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Task Management</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;