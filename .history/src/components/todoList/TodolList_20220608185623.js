import React, { Component } from "react";
import Button from "./button/Button";
import Title from "./title/Title";
import Input from "./input/Input";
import Panigation from "./panigation/Panigation";
import Divider from "./divider/Divider";
import "./style.scss";
import Items from "./list/Items";
import { listTasks } from "../../data/data";

class TodolList extends Component {
  constructor(props) {
    super(props);
    this.inputValue = {
      value: "",
    };
  }

  handleSetValueInput(valueInput) {
    console.log(valueInput);
    console.log(this.inputValue);
  }
  render() {
    const { value } = this.inputValue;
    return (
      <div className="todo-app">
        <div className="todo-header">
          <Title title="TO DO LIST APPLICATION"></Title>
          <div className="todo-task_wrapp">
            <Input
              valueInput={value}
              onSetInput={this.handleSetValueInput}
            ></Input>
            <Button value="+" add></Button>
          </div>
        </div>
        <Divider></Divider>
        <ul className="todo-main">
          <Items tasks={listTasks}></Items>
        </ul>
        <Divider></Divider>
        <Panigation></Panigation>
      </div>
    );
  }
}

export default TodolList;
