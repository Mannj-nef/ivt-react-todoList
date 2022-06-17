import React, { Component } from "react";
import { CommonContext } from "../../contexts/commonContext";

export default class Layout3 extends Component {
  render() {
    return <p>{this.context}</p>;
  }
}

Layout3.contextType = CommonContext;
