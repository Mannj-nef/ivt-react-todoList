import React, { Component } from "react";
import { CommonContext } from "../../contexts/commonContext";
import Layout1 from "./Layout1";

export default class LayoutParent extends Component {
  constructor() {
    super();
    this.state = {
      title: "hello",
    };
  }
  render() {
    return (
      <div>
        <CommonContext.Provider value={this.state}>
          <h2>hello</h2>
          <Layout1></Layout1>
        </CommonContext.Provider>
      </div>
    );
  }
}
