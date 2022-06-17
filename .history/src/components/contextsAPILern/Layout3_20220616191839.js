import React, { Component } from "react";
import { CommonContext } from "../../contexts/commonContext";

export default class Layout3 extends Component {
  render() {
    console.log(this.context);
    return <p> hello</p>;
  }
}

Layout3.contextType = CommonContext;
