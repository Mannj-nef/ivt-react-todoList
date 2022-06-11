import React, { Component, forwardRef } from "react";
import "./style.scss";

export default class Input extends forwardRef(Component) {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { valueInput, onSetInput } = this.props;
    return (
      <input
      ref={}
        value={valueInput}
        className="input input-todo"
        placeholder="Add new task in here"
        onChange={onSetInput}
      ></input>
    );
  }
}
