import React, { Component } from 'react';

export class GifList extends Component {
  render() {
    return (
      <ul>
        {this.props.gifs.map((gif) => {
          return (
            <li>
              <img src={gif} alt='' />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default GifList;

// Warning: Each child in an array or iterator should have a unique "key" prop.
