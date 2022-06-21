import React, { Component } from "react";

export default class Title extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const { title } = this.props;
    return <div style={{ fontWeight: 700, fontSize: 24 }}>{title}</div>;
  }
}
