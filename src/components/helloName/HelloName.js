import React, { Component } from "react";
import "./style.css";

class HelloName extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <>
        <div className="wrapp">
          {this.props.name}-{this.props.age}
        </div>
        {/* <div  style={{ color: "red" }}>
            {this.props.name}-{this.props.age}
          </div> */}
      </>
    );
  }
}

export default HelloName;
