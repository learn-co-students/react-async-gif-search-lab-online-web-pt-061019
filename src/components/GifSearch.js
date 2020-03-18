import React, { Component } from "react";

export default class GifSearch extends Component {
  state = {
    query: ""
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}></form>
      </div>
    );
  }
}
