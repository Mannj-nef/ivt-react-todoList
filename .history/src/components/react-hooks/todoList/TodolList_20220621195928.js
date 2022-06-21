// import React, { Component } from "react";
// import Button from "./button/Button";
// import Title from "./title/Title";
// import Input from "./input/Input";
// import Panigation from "./panigation/Panigation";
// import Divider from "./divider/Divider";
// import "./style.scss";
// import Items from "./list/Items";
// import { listTasks, listTasksValue } from "../../../data/data";

// class TodolList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       valueInput: "",
//       listTasks,
//     };
//     this.inputRef = React.createRef(null);

//     this.handleSetValueInput = this.handleSetValueInput.bind(this);
//     this.addTask = this.addTask.bind(this);
//     this.handleActionTask = this.handleActionTask.bind(this);
//   }

//   handleSetValueInput = (e) => {
//     const valueInput = e.target.value;
//     this.setState({ valueInput: valueInput });
//   };
//   addTask = () => {
//     if (!this.state.valueInput.trim()) {
//       this.setState.valueInput = "";
//       return;
//     }

//     const newTask = {
//       ...listTasksValue,
//       id: new Date().getTime(),
//       taskName: this.state.valueInput,
//     };
//     this.setState({
//       ...this.state,
//       listTasks: [newTask, ...this.state.listTasks],
//       valueInput: "",
//     });
//     this.inputRef.current.focus();
//   };

//   handleActionTask = (itemId, action) => {
//     const listTasksClone = [...this.state.listTasks];
//     if (action === "check") {
//       const index = listTasksClone.findIndex((item) => item.id === itemId);
//       const states = listTasksClone[index].state;
//       const newTask = {
//         ...listTasksClone[index],
//         state: !states,
//         // status: true,
//       };
//       listTasksClone.splice(index, 1, newTask);
//       this.setState({
//         listTasks: listTasksClone,
//       });
//       return;
//     }

//     if (action === "delete") {
//       const newListTasks = listTasksClone.filter((item) => item.id !== itemId);
//       this.setState({
//         listTasks: newListTasks,
//       });
//     }
//   };

//   render() {
//     const { valueInput } = this.state;
//     return (
//       <div className="todo-app">
//         <div className="todo-header">
//           <Title title="TO DO LIST APPLICATION"></Title>
//           <div className="todo-task_wrapp">
//             <Input
//               ref={this.inputRef}
//               valueInput={valueInput}
//               onSetInput={this.handleSetValueInput}
//             ></Input>
//             <Button value="+" add onClick={this.addTask}></Button>
//           </div>
//         </div>
//         <Divider></Divider>
//         <ul className="todo-main">
//           <Items
//             tasks={this.state.listTasks}
//             actionTask={this.handleActionTask}
//           ></Items>
//         </ul>
//         <Divider></Divider>
//         <Panigation></Panigation>
//       </div>
//     );
//   }
// }

// export default TodolList;

import React, { Component } from "react";
import Button from "./button/Button";
import Title from "./title/Title";
import Input from "./input/Input";
import Panigation from "./panigation/Panigation";
import Divider from "./divider/Divider";
import "./style.scss";
import Items from "./list/Items";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { getTaskApi } from "../../../apis/index";

const TodolList = () => {
  const [valueInput, setValueInput] = useState("");
  const [datas, setDatas] = useState([]);

  const inputRef = useRef(null);

  useEffect(() => {
    try {
      const handleCallApi = async () => {
        const dataTask = await getTaskApi();
        dataTask && console.log(dataTask);
      };
      handleCallApi();
    } catch (error) {
      console.log(error);
    }
  }, []);
  const handleSetValueInput = (e) => {
    setValueInput(e.target.value);
  };
  const addTask = () => {
    if (!valueInput.trim()) {
      return;
    }
    console.log("add tag");
    inputRef.current.focus();
    setValueInput("");
  };

  const handleActionTask = (itemId, action) => {
    const listTasksClone = [...this.state.listTasks];
    if (action === "check") {
      const index = listTasksClone.findIndex((item) => item.id === itemId);
      const states = listTasksClone[index].state;
      const newTask = {
        ...listTasksClone[index],
        state: !states,
      };
      listTasksClone.splice(index, 1, newTask);
      this.setState({
        listTasks: listTasksClone,
      });
      return;
    }

    if (action === "delete") {
      const newListTasks = datas.filter((item) => item.id !== itemId);
      setDatas(newListTasks);
    }
  };

  return (
    <div className="todo-app">
      <div className="todo-header">
        <Title title="TO DO LIST APPLICATION"></Title>
        <div className="todo-task_wrapp">
          <Input
            ref={inputRef}
            valueInput={valueInput}
            onSetInput={handleSetValueInput}
          ></Input>
          <Button value="+" add onClick={addTask}></Button>
        </div>
      </div>
      <Divider></Divider>
      <ul className="todo-main">
        <Items tasks={datas} actionTask={handleActionTask}></Items>
      </ul>
      <Divider></Divider>
      <Panigation></Panigation>
    </div>
  );
};

export default TodolList;
