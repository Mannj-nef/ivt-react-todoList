import React, { Component } from "react";
import { CommonContext } from "../../contexts/commonContext";

export default class Layout3 extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    console.log(this.context);
    return (
      <>
        <p> hello {this.context.title}</p>
      </>
    );
  }
}

Layout3.contextType = CommonContext;
