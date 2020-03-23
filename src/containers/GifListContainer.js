import React, {Component} from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends Component {
    constructor() {
        super();
        this.state = {
          gifs: []
        };
      }

    fetchGifs = (query="") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=A08euV94bQKGs4ilrpiATCwMbktamHiR&rating=g&limit=3`)
            .then(resp => resp.json())
            .then(json => {
                this.setState({
                    gifs: json.data.map(gif => ({url: gif.images.original.url}))
                })
            })
    }

    componentDidMount(){
        this.fetchGifs();
    }

    render(){
        return(
            <div>
                <GifList gifs={this.state.gifs} />
                <GifSearch fetchGifs={this.fetchGifs} />
            </div>
        )
    }
}

export default GifListContainer; 