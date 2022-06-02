import React, { Component } from "react";
import "./style.scss";

export default class Input extends Component {
  render() {
    return (
      <input
        className="input input-todo"
        placeholder="Add new task in here"
      ></input>
    );
  }
}
