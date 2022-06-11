import React, { Component } from "react";
import "./style.scss";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  render() {
    console.log(this.props);
    return (
      <input
        className="input input-todo"
        placeholder="Add new task in here"
        onChange={this.handleChangeInput}
      ></input>
    );
  }
}
