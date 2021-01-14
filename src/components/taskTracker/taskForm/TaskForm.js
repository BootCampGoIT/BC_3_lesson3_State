import React, { useState } from "react";

const initialState = {
  task: "",
  term: "",
};

const TaskForm = ({ addTask }) => {
  const [state, setState] = useState({ ...initialState });

  const onHandleChange = (e) => {
    const name = e.target.name;
    setState({ ...state, [name]: e.target.value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    addTask({ task: state.task, term: state.term });
    setState({ ...initialState });
  };

  return (
    <form onSubmit={onHandleSubmit} style={{ display: "flex" }}>
      <input
        type='text'
        name='task'
        onChange={onHandleChange}
        value={state.task}
      />
      <input
        type='date'
        name='term'
        onChange={onHandleChange}
        value={state.term}
      />
      <button type='submit'>Add task</button>
    </form>
  );
};

export default TaskForm;

// export default class TaskForm extends Component {
//   state = {
//     task: "",
//     term: "",
//   };

//   onHandleChange = (e) => {
//     const name = e.target.name;
//     this.setState({ [name]: e.target.value });
//   };

//   onHandleSubmit = (e) => {
//     e.preventDefault();
//     this.props.addTask({ task: this.state.task, term: this.state.term });
//     this.setState({ task: "", term: "" });
//   };

//   render() {
//     return (
//       <form onSubmit={this.onHandleSubmit}>
//         <input
//           type='text'
//           name='task'
//           onChange={this.onHandleChange}
//           value={this.state.task}
//         />
//         <input
//           type='date'
//           name='term'
//           onChange={this.onHandleChange}
//           value={this.state.term}
//         />
//         <button type='submit'>Add task</button>
//       </form>
//     );
//   }
// }
