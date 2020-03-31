import React, { Component } from 'react'; 
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

export default class GifListContainer extends Component {
  state = {
    gifs: []
  }

  handleFetch = (query) => {
    fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
    .then(resp => resp.json())
    .then(({data}) => {
     this.setState({
        gifs: data.map( gif => ({ 
          url: gif.images.original.url }) 
        ) 
      })
    })
  }

  componentDidMount() {
    this.handleFetch()
  }

  render(){
    return (
      <div>
        <GifSearch search={this.handleFetch}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }

}