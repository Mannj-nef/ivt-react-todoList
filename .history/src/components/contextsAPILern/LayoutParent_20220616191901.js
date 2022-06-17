import React, { Component } from "react";
import { CommonContext } from "../../contexts/commonContext";
import Layout1 from "./Layout1";

export default class LayoutParent extends Component {
  constructor() {
    super();
    this.state = {
      title: "Quan",
    };
  }
  render() {
    return (
      <div>
        <CommonContext.Provider value={this.state}>
          <Layout1></Layout1>
        </CommonContext.Provider>
      </div>
    );
  }
}
