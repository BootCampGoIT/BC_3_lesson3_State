import React from "react";

const TaskFilter = ({ filter, onHandleFilter }) => {
  return <input type='text' value={filter} onChange={onHandleFilter} />;
};

export default TaskFilter;
