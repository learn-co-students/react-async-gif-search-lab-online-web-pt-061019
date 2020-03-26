import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    constructor(){
        super()
        this.state = {
            gifs: [],
            query: ""
        }
    }

    render() {
        return (
            <div>
                <GifSearch fetchGifs={this.fetchGifs} />
                <GifList gifs={this.state.gifs} />
            </div>
        );
    }

    fetchGifs = (query="dolphin") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=3Lzmtb8Oz4NBIMFDqFIyeQ6HamDVT6vg&rating=g`)
        .then(resp => resp.json())
        .then(dataJSON => {
            this.setState({
                gifs: dataJSON.data.slice(0, 3)
            })
        })
    }
    
    componentDidMount() {
        this.fetchGifs()
    }

}


export default GifListContainer;
