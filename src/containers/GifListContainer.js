import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }

  handleSearch = (event) => {
    event.preventDefault();
    let searchValue = event.target.firstElementChild.value;

    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=9vzBM8bYKu3CifbL9fNO5niY99dDCWDq&rating=g`,
    )
      .then((resp) => resp.json())
      .then(({ data }) => {
        this.setState({
          gifs: data.slice(0, 3).map((gifImg) => gifImg.images.original.url),
        });
      });
  };

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch handleSearch={this.handleSearch} />
      </div>
    );
  }
}

export default GifListContainer;
