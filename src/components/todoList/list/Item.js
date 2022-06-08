import React, { Component } from "react";
import Button from "../button/Button";
import Divider from "../divider/Divider";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { taskItem } = this.props;
    return (
      <>
        <li className="todo-tiem">
          <span>{taskItem?.taskName}</span>
          <span className="action-wrapp">
            <Button value={"✔"} check={taskItem?.state}></Button>
            <Button value={"X"}></Button>
          </span>
        </li>
        <Divider></Divider>
      </>
    );
  }
}
