import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export default class GifListContainer extends Component {
  state = {
    gifObjs: []
  };

  componentDidMount() {
    this.fetchGifObjs();
  }

  fetchGifObjs = query => {
    fetch(
      "https://api.giphy.com/v1/gifs/search?q=" +
        query +
        "&api_key=dc6zaTOxFJmzC&rating=g&limit=3"
    )
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          gifObjs:
            json.data &&
            json.data.map(gif => ({
              url: gif.images.original.url,
              title: gif.title
            }))
        });
      });
  };

  render() {
    return (
      <div>
        <GifList gifObjs={this.state.gifObjs} />
        <GifSearch fetchGifObjs={this.fetchGifObjs} />
      </div>
    );
  }
}
