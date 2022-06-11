import React, { Component } from "react";
import Item from "./Item";
import "./style.scss";

const items = [
  // "This is a first task!",
  // "This is a first task!",
  // "This is a first task!",
  // "This is a first task!",
  // "This is a first task!",
];

export default class Items extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const { tasks } = this.props;
    return (
      <>
        {tasks?.length > 0 &&
          tasks?.map((taskItem) => (
            <Item
              key={taskItem?.id}
              value={taskItem?.taskName}
              state={taskItem?.state}
            ></Item>
          ))}
      </>
    );
  }
}
