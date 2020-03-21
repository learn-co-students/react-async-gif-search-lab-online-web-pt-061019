
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
import React, { Component } from 'react';

class GifListContainer extends Component {
    state = {
        gifs: []
    }

    fetchGifs = (query = '') => {
        let url = `https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=XBVelt49HLDxN54VgYpewNGwDnMKrlJe&rating=g`
        fetch(url)
        .then(res => res.json())
        .then(({data}) => {
            this.setState({
                gifs: data.map(gif => ({ url: gif.images.original.url }))
            })
        })
    }
    
    componentDidMount() {
        this.fetchGifs()
    }

    render(){
        return(
          <div>
              <GifList gifs={this.state.gifs} />
              <GifSearch handleSubmit={this.handleSubmit} />
          </div>
        )
      }
}
export default GifListContainer
