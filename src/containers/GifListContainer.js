import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  componentDidMount() {
    this.fetchGifs();
  }

  fetchGifs = (query = "  dolphins") => {
    fetch('http://api.giphy.com/v1/gifs/search?q=' + query + '&api_key=82zit6MCu4KsqqH5kLSsXYNcvPMTtm5I&rating=g&limit=3')
      .then(resp => resp.json())
      .then(({data}) => {
        this.setState({
          gifs: data.map(gif => ({ url: gif.images.original.url, id: gif.id }))
        })
      })
  }

  render() {
    return(
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer;
