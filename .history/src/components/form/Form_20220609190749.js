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
          className="w-[600px] mx-auto my-10 border rounded-lg flex flex-col border-cyan-600 p-16 gap-3 items-center"
          onSubmit={this.handleSubmit}
        >
          <input
            className="input-control"
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Usename"
            onChange={this.handleChange}
          />
          <input
            className="input-control"
            type="text"
            name="password"
            autoComplete="off"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <input
            className="input-control"
            type="text"
            autoComplete="off"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <button
            className="btn rounded-lg text-white bg-blue-700 px-5 py-3"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
