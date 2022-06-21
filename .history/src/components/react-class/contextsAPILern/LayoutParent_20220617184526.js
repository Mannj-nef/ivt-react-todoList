import React, { Component } from "react";
import { CommonContext } from "../../contexts/commonContext";
import Layout1 from "./Layout1";

export default class LayoutParent extends Component {
  constructor() {
    super();
    this.state = {
      title: "Quan",
      name: "a",
      age: 20,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  handleChange = () => {};
  render() {
    console.log(CommonContext);
    return (
      <div>
        {console.log()}
        <CommonContext.Provider
          value={{ ...this.state, handleChange: this.handleChange }}
        >
          <Layout1></Layout1>
        </CommonContext.Provider>
      </div>
    );
  }
}
