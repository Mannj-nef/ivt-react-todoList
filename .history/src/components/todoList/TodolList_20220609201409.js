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
    this.handleSetValueInput = this.handleSetValueInput.bind(this);
  }

  handleSetValueInput = (e) => {
    const valueInput = e.target.value;
    this.setState({ valueInput: valueInput });
  };
  addTask = () => {
    this.setState({
      ...this.state,
      listTasks: listTasks.push({
        id: Math.random + new Date().getTime(),
        taskName: this.state.valueInput,
        state: false,
      }),
    });

    console.log(this.state.listTasks);
  };

  render() {
    const { valueInput } = this.state;
    return (
      <div className="todo-app">
        <div className="todo-header">
          <Title title="TO DO LIST APPLICATION"></Title>
          <div className="todo-task_wrapp">
            <Input
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
