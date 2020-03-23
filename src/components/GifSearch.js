import React from 'react'

export default class GifSearch extends React.Component {

  // constructor() {
  //   super()
  //   this.state = {
  //     query: ""
  //   }
  // }

  state = {
    query: ""
  }

  handleSearch = (event) => {
    // console.log("Typing")
    // console.log(event.target.value)
    this.setState({
      query: event.target.value
    }, console.log("The query is currently:", this.state.query))
    // console.log("The query is currently:", this.state.query)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.fetchGifs(this.state.query)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Enter a search query" value={this.state.query} onChange={this.handleSearch} />
      </form>
    )
  }

}
