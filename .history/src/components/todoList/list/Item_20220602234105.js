import React, { Component } from "react";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { task } = this.props;
    return <span>{task}</span>;
  }
}
