import React, { Component } from "react";

export default class GifSearch extends Component {
  state = {
    query: ""
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  onChange = event => {
    this.setState();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleInput}></input>
        </form>
      </div>
    );
  }
}
