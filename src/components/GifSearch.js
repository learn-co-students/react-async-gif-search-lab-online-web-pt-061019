import React, { Component } from "react"

export default class GifSearch extends Component {

    state = {
        query: ""
    }

    handleInput = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            query: ""
        })
        this.props.fetchGifs(this.state.query)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        onChange={this.handleInput}
                        value={this.state.query}
                        ></input>
                        <input type="submit" value="Search"></input>
                </form>
            </div>
        )
    }
}