import React, { Component } from "react";
import Item from "./Item";
import "./style.scss";

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
            <Item key={taskItem?.id} taskItem={tasks}></Item>
          ))}
      </>
    );
  }
}
