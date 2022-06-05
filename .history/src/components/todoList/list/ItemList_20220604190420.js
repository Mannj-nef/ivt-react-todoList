import React, { Component } from "react";
import Item from "./Item";
import "./style.scss";

const items = [
  "This is a first task!",
  "This is a first task!",
  "This is a first task!",
  "This is a first task!",
  "This is a first task!",
];

export default class ItemList extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    console.log(items);
    return (
      <>
        {items.length &&
          items.map((item, index) => <Item key={index} value={item}></Item>)}
      </>
    );
  }
}
