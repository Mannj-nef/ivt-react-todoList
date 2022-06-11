import React, { Component } from "react";
import "./style.scss";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput(e) {
    console.log(e.target.value);
    this.props.handleSetValueInput(e.target.value);
  }

  render() {
    const { valueInput } = this.props;
    console.log(this.props);
    return (
      <input
        value={valueInput}
        className="input input-todo"
        placeholder="Add new task in here"
        onChange={this.handleChangeInput}
      ></input>
    );
  }
}
