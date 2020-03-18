import React, { Component } from "react";

export default class GifList extends Component {
  render() {
    return (
      <ul>
        {this.props.gifObjs &&
          this.props.gifObjs.map(obj => {
            return (
              <li>
                <img src={obj.url} alt={obj.title}></img>
              </li>
            );
          })}
      </ul>
    );
  }
}
