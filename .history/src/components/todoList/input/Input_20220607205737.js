import React, { Component } from "react";
import "./style.scss";

export default class Input extends Component {
  handleChange(e) {
    this.handell(e.target.value);
  }
  render() {
    return (
      <input
        className="input input-todo"
        placeholder="Add new task in here"
        onChange={(e) => this.handleChange(e)}
      ></input>
    );
  }
}
