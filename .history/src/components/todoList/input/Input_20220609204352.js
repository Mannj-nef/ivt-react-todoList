import React, { Component, forwardRef } from "react";
import "./style.scss";

class Input extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { valueInput, onSetInput } = this.props;
    return (
      <input
        ref={this.props.inputRef}
        value={valueInput}
        className="input input-todo"
        placeholder="Add new task in here"
        onChange={onSetInput}
      ></input>
    );
  }
}

export default forwardRef((props, ref) => <Input inputRef={ref} />);
