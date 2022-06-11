import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" onChange={this.handleChange} />
          <input type="text" name="password" onChange={this.handleChange} />
          <input type="text" name="email" onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
