import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export default class GifListContainer extends Component {
  state = {
    gifObj: []
  };

  componentDidMount() {
    this.fetchGifObjs();
  }

  fetchGifObjs = query => {
    fetch(
      "https://api.giphy.com/v1/gifs/search?q=' + query + '&api_key=dc6zaTOxFJmzC&rating=g"
    )
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          gifObj: data.data
        });
      });
  };

  handleSubmit = () => {
    this.fetchGifObjs();
  };

  render() {
    return (
      <div>
        <GifList state={this.state} />
        <GifSearch handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
