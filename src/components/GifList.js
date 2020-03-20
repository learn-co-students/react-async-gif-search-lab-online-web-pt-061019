import React, { Component } from 'react';

export class GifList extends Component {
  renderGifs = () => {
    let allGifs = ""
    if (this.props.gifs && this.props.gifs.map) {
      allGifs = this.props.gifs.map(gif => {
        return <li><img src={gif.url} alt="gif"/></li>
      })
    }
    return allGifs
    console.log(this.props)
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
