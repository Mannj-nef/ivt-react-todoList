import React, { Component } from "react";
import "./style.scss";

export default class Divider extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { fullWidth } = this.props;
    return <hr className={`${fullWidth ? "w-full" : ""} drivider`}></hr>;
  }
}
