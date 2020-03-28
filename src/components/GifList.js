import React, {Component} from 'react';

class GifList extends Component{
    renderGifs = () => {
        let gifs = ''
        if (this.props.gifs && this.props.gifs.map) {
            gifs=this.props.gifs.map(gif => {
                return <li><img src={gif.url} alt='gif' /></li>
            })
        }
        return gifs
    }

    render(){
        return(
            <ul>
                {this.renderGifs()}
            </ul>
        )
    }
}

export default GifList