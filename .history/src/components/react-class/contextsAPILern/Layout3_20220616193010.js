import React, { Component } from "react";
import { CommonContext } from "../../contexts/commonContext";

export default class Layout3 extends Component {
  render() {
    console.log(this.context);
    return (
      <>
        <p> hello {this.context.title}</p>
        <button onChange={this.context.handleChange}>Change</button>
      </>
    );
  }
}

Layout3.contextType = CommonContext;
