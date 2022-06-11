import React, { Component } from "react";
import "./style.scss";

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
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <form
          className="w-[600px] mx-auto my-10 border rounded-lg flex flex-col border-cyan-600 p-16 gap-3"
          onSubmit={this.handleSubmit}
        >
          <input
            className="input-control"
            type="text"
            name="name"
            placeholder="Usename"
            onChange={this.handleChange}
          />
          <input
            className="input-control"
            type="text"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <input
            className="input-control"
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <button
            className="btn rounded-lg text-white bg-blue-700 max-w[30px]"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
