import React, { Component } from "react";
import "./style.scss";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const { value, active, check, add, onClick } = this.props;
    return (
      <button
        className={`btn ${active ? "btn-active" : ""} ${
          check ? "btn-check" : ""
        } ${add ? "btn-add" : ""}`}
        onClick={onClick}
      >
        {value}
      </button>
    );
  }
}
