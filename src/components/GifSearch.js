import React, { Component } from "react";

export default class GifSearch extends Component {
  state = {
    query: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchGifObjs(this.state.query);
  };

  handleInput = event => {
    this.setState({
      query: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleInput}
            value={this.state.query}
          ></input>
          <input type="submit" value="Search"></input>
        </form>
      </div>
    );
  }
}
