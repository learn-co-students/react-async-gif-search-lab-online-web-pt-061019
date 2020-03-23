import React from 'react'
import GifSearch from '../components/GifSearch.js'
import GifList from '../components/GifList.js'

export default class GifListContainer extends React.Component {

  // constructor() {
  //   super()
  //   this.state = {
  //     gifs: []
  //   }
  // }

  state = {
    gifs: []
  }

  fetchGifs = ( query = "pizza") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=l0I2mjMvfXQTonMTdfnuwc1G97iNWZ5H&rating=g&limit=3`)
    .then((response) => {
      return response.json();
    })
    .then(({data}) => {
      this.setState({
        gifs: data.map( gif => ({ url: gif.images.original.url }))
      })
    });
  }

  // componentDidMount() {
  //   this.fetchGifs()
  // }

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch fetchGifs={this.fetchGifs} />
      </div>
    )
  }


}
