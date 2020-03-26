import React, { Component } from 'react';

class GifSearch extends Component {

    state = {
        query: "",
        submittedData: []
    }

    handleQuery = e => {
        this.setState({
            query: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.fetchGifs(this.state.query)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input 
                    type="text" 
                    onChange={e => this.handleQuery(e)}
                    value={this.state.query}     
                />
                <input type="submit"></input>
            </form>
        );
    }
}

export default GifSearch;
