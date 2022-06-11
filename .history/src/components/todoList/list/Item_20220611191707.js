import React, { Component } from "react";
import Button from "../button/Button";
import Divider from "../divider/Divider";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { taskItem, handleActionTask } = this.props;
    return (
      <>
        <li className="todo-tiem">
          <span>{taskItem?.taskName}</span>
          <span className="action-wrapp">
            <Button
              value={"✔"}
              onClick={() => handleActionTask(taskItem.id, "check")}
            ></Button>
            {/* <Button value={"✔"} check={taskItem?.state}></Button> */}
            <Button
              value={"X"}
              onClick={() => handleActionTask(taskItem.id, "delete")}
            ></Button>
          </span>
        </li>
        <Divider></Divider>
      </>
    );
  }
}
