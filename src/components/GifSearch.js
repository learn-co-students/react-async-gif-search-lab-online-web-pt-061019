import React, { Component } from 'react'

export default class GifSearch extends Component {
  state = {
    query: ""
  }

  handleSubmit = e =>{
    e.preventDefault()
    this.props.fetchGifs(this.state.query)
  }

  render() {
    return (
      <div>
        <h4>Enter a Search Term:</h4>
        <form onSubmit={this.handleSubmit}>
           <input type='text' value={this.state.query} 
              onChange= {e => this.setState({query: e.target.value})} />
          <input type='submit' value='Find Gifs' />
        </form>
        <br></br>
      </div>
    )
  }
}
