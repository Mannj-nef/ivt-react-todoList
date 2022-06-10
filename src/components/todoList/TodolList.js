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
  }

  handleSetValueInput = (e) => {
    const valueInput = e.target.value;
    this.setState({ valueInput: valueInput });
  };
  addTask = () => {
    if (!this.state.valueInput.trim()) return;

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
            <Button value="+" add onAddTask={this.addTask}></Button>
          </div>
        </div>
        <Divider></Divider>
        <ul className="todo-main">
          <Items tasks={this.state.listTasks}></Items>
        </ul>
        <Divider></Divider>
        <Panigation></Panigation>
      </div>
    );
  }
}

export default TodolList;
