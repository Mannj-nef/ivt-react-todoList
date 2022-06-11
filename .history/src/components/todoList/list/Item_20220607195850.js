import React, { Component } from "react";
import Button from "../button/Button";
import Divider from "../divider/Divider";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { tasks } = this.props;
    console.log(tasks);
    return (
      <>
        <li className="todo-tiem">
          <span></span>
          <span className="action-wrapp">
            <Button value={"✔"} check></Button>
            <Button value={"X"}></Button>
          </span>
        </li>
        <Divider></Divider>
      </>
    );
  }
}
