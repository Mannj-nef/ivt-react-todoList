import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      email: "",
    };
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Usename"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
