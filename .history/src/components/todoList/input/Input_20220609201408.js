import React, { Component } from "react";
import "./style.scss";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { valueInput, onSetInput } = this.props;
    return (
      <input
        value={valueInput}
        className="input input-todo"
        placeholder="Add new task in here"
        onChange={onSetInput}
      ></input>
    );
  }
}
