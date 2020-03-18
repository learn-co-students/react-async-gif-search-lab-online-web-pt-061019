import React, { Component } from "react";

export default class GifList extends Component {
  render() {
    return (
      <ul>
        {this.props.gifObjs.map(obj => {
          <li>
            <img src={obj.url}></img>
          </li>;
        })}
      </ul>
    );
  }
}
