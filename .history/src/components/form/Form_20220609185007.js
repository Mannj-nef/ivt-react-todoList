import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      email: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e) => {
    const { name, value } = this.state;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.target.preventDefault();
    console.log(this.setState);
  };
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
