import React, { Component } from "react";

export default class GifList extends Component {

    render() {
        return (
            <ul>
                {this.props.gifs &&
                    this.props.gifs.map(gif => {
                        return (
                            <li>
                                <img src={gif.url} alt={gif.title} key={gif.id}></img>
                            </li>
                        )
                    })}
            </ul>
        )
    }
}

