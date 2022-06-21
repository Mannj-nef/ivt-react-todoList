import React, { Component } from "react";
import Button from "../button/Button";
import "./style.scss";

class Panigation extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="todo-panigation">
        <Button value="<"></Button>
        <Button value="1" active></Button>
        <Button value="2"></Button>
        <Button value="3"></Button>
        <Button value=">"></Button>
      </div>
    );
  }
}

export default Panigation;
