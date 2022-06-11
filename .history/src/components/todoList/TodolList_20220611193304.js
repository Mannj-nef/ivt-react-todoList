import React, { Component } from "react";
import Button from "./button/Button";
import Title from "./title/Title";
import Input from "./input/Input";
import Panigation from "./panigation/Panigation";
import Divider from "./divider/Divider";
import "./style.scss";
import Items from "./list/Items";
import { listTasks, listTasksValue } from "../../data/data";

class TodolList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueInput: "",
      listTasks,
    };
    this.inputRef = React.createRef(null);

    this.handleSetValueInput = this.handleSetValueInput.bind(this);
    this.addTask = this.addTask.bind(this);
    this.handleActionTask = this.handleActionTask.bind(this);
  }

  handleSetValueInput = (e) => {
    const valueInput = e.target.value;
    this.setState({ valueInput: valueInput });
  };
  addTask = () => {
    if (!this.state.valueInput.trim()) {
      this.setState.valueInput = "";
      return;
    }

    const newTask = {
      ...listTasksValue,
      id: new Date().getTime(),
      taskName: this.state.valueInput,
    };
    this.setState({
      ...this.state,
      listTasks: [newTask, ...this.state.listTasks],
      valueInput: "",
    });
    this.inputRef.current.focus();
  };

  handleActionTask = (itemId, action) => {
    console.log(itemId, action);
    const listTasksClone = [...this.state.listTasks];
    console.log(listTasksClone);

    if (action === "check") {
      const newListTasks = listTasksClone.forEach((item) => {
        if (item.id === itemId) {
          const state = (item.state = true);
          console.log(state);
        }
      });

      console.log(newListTasks);
    }

    if (action === "delete") {
      const newListTasks = listTasksClone.filter((item) => item.id !== itemId);
      this.setState({
        listTasks: newListTasks,
      });
    }
  };

  render() {
    const { valueInput } = this.state;
    return (
      <div className="todo-app">
        <div className="todo-header">
          <Title title="TO DO LIST APPLICATION"></Title>
          <div className="todo-task_wrapp">
            <Input
              ref={this.inputRef}
              valueInput={valueInput}
              onSetInput={this.handleSetValueInput}
            ></Input>
            <Button value="+" add onClick={this.addTask}></Button>
          </div>
        </div>
        <Divider></Divider>
        <ul className="todo-main">
          <Items
            tasks={this.state.listTasks}
            actionTask={this.handleActionTask}
          ></Items>
        </ul>
        <Divider></Divider>
        <Panigation></Panigation>
      </div>
    );
  }
}

export default TodolList;
