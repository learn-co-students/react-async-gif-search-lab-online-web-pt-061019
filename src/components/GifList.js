import React, { Component } from 'react';

export class GifList extends Component {
  renderGifs = () => {
    this.props.gifs.data.map(gif => {
      return <li>{gif.id}</li>
    })
    // console.log(this.props.gifs.data)
    // return <li>Test gif!</li>

    return <li>Test Gif!</li>
  }

  render() {
    return (
      <ul>
        {this.renderGifs()}
      </ul>
    );
  }
}

export default GifList;
