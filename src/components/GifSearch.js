import React from 'react';

class GifSearch extends React.Component {

  state = {
    query: ''
  }

  handleInput = (event) => {
    this.setState({
      query: event.target.value
    })

  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      query: ''
    })
    this.props.fetchGifs(this.state.query)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.query} onChange={this.handleInput}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }

}

export default GifSearch;
