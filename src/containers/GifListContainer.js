import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export class GifListContainer extends Component {

  constructor() {
    super()
    this.state = {
      query: "dolphin",
      gifs: ""
    }
  }

  componentDidMount() {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=7p14coMkHsJPuJjT3HzTSieCiCkmt6o4&rating=g`)
    .then(res => res.json())
    .then(gifs => {
      console.log(gifs)
      this.setState({
        gifs: [gifs.data[0], gifs.data[1], gifs.data[2]]
      })
    })
  }

  handleSubmit = () => {
    console.log("submitted!")
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
