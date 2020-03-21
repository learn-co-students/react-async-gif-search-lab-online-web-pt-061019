import React, { Component } from 'react'

class GifSearch extends Component {
    state = {
        query: ""
    }
    
    handleSubmit = e => {
        e.preventDefault()
        this.props.fetchGifs(this.state.query)
    }
    
    render() {
        return (
        <div>
          <p className="gifSearch">Enter a Search Term:</p>
          <form className="gifSearch"  onSubmit={this.handleSubmit}>
              <input type='text' placeholder="Search.." value={this.state.query} 
              onChange= {e => this.setState({query: e.target.value})} />
              <input type='submit' value='Find Gifs' />
            </form>
        <br></br>
      </div>
    )
  }
}
export default GifSearch