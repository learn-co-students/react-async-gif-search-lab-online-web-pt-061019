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
        "&api_key=dc6zaTOxFJmzC&rating=g/?_limit=3"
    )
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          gifObjs: data.data
        });
      });
  };

  render() {
    return (
      <div>
        <GifList state={this.state.gifObjs} />
        <GifSearch handleSubmit={this.fetchGifObjs} />
      </div>
    );
  }
}
