import React, { Component } from "react";
import Item from "./Item";
import Button from "../button/Button";
import "./style.scss";
import Divider from "../divider/Divider";

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
          items.map((item, index) => (
            <>
              <li className="todo-tiem" key={index}>
                <Item task={item}></Item>
                <span className="action-wrapp">
                  <Button value={"✔"} check></Button>
                  <Button value={"X"}></Button>
                </span>
              </li>
              <Divider></Divider>
            </>
          ))}
      </>
    );
  }
}
