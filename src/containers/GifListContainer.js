import React, {Component} from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
        query: '',
        gifs: ''
    }

    handleSubmit = (query) => {
        let apiUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`
        fetch(apiUrl)
        .then(res => res.json())
        .then(gifs => {
            this.setState({
                gifs: gifs.data.map(gif => ({url: gif.images.original.url})),
                query: query
            })
        })
    }

    render(){
        return(
            <div>
                <GifList gifs={this.state.gifs}/>
                <GifSearch handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default GifListContainer