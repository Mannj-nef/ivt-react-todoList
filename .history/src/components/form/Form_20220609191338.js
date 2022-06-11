import React, { Component } from "react";
import "./style.scss";

const initialState = {
  name: "",
  password: "",
  email: "",
};

export default class Form extends Component {
  constructor() {
    super();
    this.state = { ...initialState };
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

    // const { name, password, email } = this.state;
    // console.log(name, password, email);
    // // this.setState({
    this.setState({ ...initialState });
    // // })
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
            name="email"
            autoComplete="off"
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
