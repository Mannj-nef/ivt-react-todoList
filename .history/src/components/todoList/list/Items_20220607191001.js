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
    const { listTasks } = this.props;
    return (
      <>
        {listTasks?.length > 0 &&
          listTasks?.map((item) => (
            <Item
              key={listTasks?.id}
              value={listTasks?.taskName}
              state={listTasks?.state}
            ></Item>
          ))}
      </>
    );
  }
}
