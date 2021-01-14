import React, { useState, Component } from "react";
import TaskForm from "./taskForm/TaskForm";
import TaskList from "./taskList/TaskList";
import { v4 as uuidv4 } from "uuid";
import TaskFilter from "./taskFilter/TaskFilter";

// const TaskTracker = () => {
//   const [tasks, setTasks] = useState([]);
//   const [filter, setFilter] = useState("");

//   const addTask = (task) => {
//     setTasks((prev) => [...prev, { id: uuidv4(), ...task }]);
//     // setTasks([...tasks, { id: uuidv4(), ...task }]);
//   };

//   const deleteTask = (e) => {
//     const id = e.target.dataset.id;
//     setTasks([...tasks.filter((task) => task.id !== id)]);
//   };

//   const onHandleFilter = (e) => {
//     setFilter(e.target.value);
//   };

//   const getFilteredTasks = () => {
//     return [
//       ...tasks.filter((item) =>
//         item.task.toLowerCase().includes(filter.toLowerCase())
//       ),
//     ];
//   };

//   return (
//     <div>
//       <TaskForm addTask={addTask} />
//       <TaskFilter filter={filter} onHandleFilter={onHandleFilter} />
//       <TaskList tasks={getFilteredTasks()} deleteTask={deleteTask} />
//     </div>
//   );
// };

// export default TaskTracker;

class TaskTracker extends Component {
  state = {
    tasks: [],
    filter: "",
  };

  addTask = (task) => {
    this.setState((prev) => ({
      tasks: [...prev.tasks, { id: uuidv4(), ...task }],
    }));
  };

  deleteTask = (e) => {
    const id = e.target.dataset.id;
    this.setState({
      tasks: [...this.state.tasks.filter((task) => task.id !== id)],
    });
  };

  onHandleFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFilteredTasks = () => {
    return [
      ...this.state.tasks.filter((item) =>
        item.task.toLowerCase().includes(this.state.filter.toLowerCase())
      ),
    ];
  };

  render() {
    return (
      <div>
        <TaskForm addTask={this.addTask} />
        <TaskFilter
          filter={this.state.filter}
          onHandleFilter={this.onHandleFilter}
        />
        <TaskList
          tasks={this.getFilteredTasks()}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

export default TaskTracker;
