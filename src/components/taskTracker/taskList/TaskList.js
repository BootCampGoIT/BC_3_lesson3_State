import React from "react";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul>
      {tasks.map((item) => (
        <li key={item.id}>
          <p>Task: {item.task}</p>
          <p>Term: {item.term}</p>
          <button data-id={item.id} onClick={deleteTask}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
