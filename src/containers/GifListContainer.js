import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export class GifListContainer extends Component {

  constructor() {
    super()
    this.state = {
      query: "",
      gifs: ""
    }
  }

  handleSubmit = (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=7p14coMkHsJPuJjT3HzTSieCiCkmt6o4&rating=g&limit=3`)
    .then(res => res.json())
    .then(gifs => {
      console.log("gifs", gifs)
      this.setState({
        gifs: gifs.data.map(gif => ({url: gif.images.original.url})),
        query: query
      })
    })
  }

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch handleSubmit={this.handleSubmit} />

      </div>
    );
  }
}

export default GifListContainer;
