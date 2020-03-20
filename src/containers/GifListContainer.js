
// import GifList from '../components/GifList'
// import GifSearch from '../components/GifSearch'
import React, { Component } from 'react';
class GifListContainer extends Component {
    state = {
     gifs: []
    }
    
    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=XBVelt49HLDxN54VgYpewNGwDnMKrlJe&rating=g')
        .then(response => response.json())
        .then(gifs => {
            this.setState({
                gifs: [gifs.data[0], gifs.data[1], gifs.data[2]]
            })
        })
    }

    render(){
        return(
          <div>
              Hi
          </div>
        )
      }
}
export default GifListContainer
