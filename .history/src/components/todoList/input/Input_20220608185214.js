import React, { Component } from "react";
import "./style.scss";

const { valueInput, handleSetValueInput } = this.props;
export default class Input extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput(e) {
    handleSetValueInput(e.target.value);
  }

  render() {
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
