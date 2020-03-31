import React, { Component } from 'react'

export default class GifSearch extends Component{
  state = {
    query: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.search(this.state.query)
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Enter Search Term: 
              <input 
                id="keyword" 
                name="keyword" 
                type="text"
                onChange={e => this.setState({query: e.target.value})}
              />
          </label>
        </div>
        <button type="submit">Find Gifs</button>
      </form>
    )
  }
} 