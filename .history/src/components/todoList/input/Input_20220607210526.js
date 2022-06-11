import React, { Component } from "react";
import "./style.scss";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.props = this.props.funChange;
  }

  handleChange(e) {
    this.props.funChange(e.target.value);
  }

  render() {
    console.log(this.props);
    return (
      <input
        className="input input-todo"
        placeholder="Add new task in here"
        onChange={(e) => this.handleChange(e)}
      ></input>
    );
  }
}
