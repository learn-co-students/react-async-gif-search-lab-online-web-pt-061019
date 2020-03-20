import React, { Component } from 'react';

export class GifSearch extends Component {
  constructor() {
    super()
    this.state = {
      query: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleSubmit(this.state.query)
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text" name="query" onChange={event => this.handleChange(event)} value={this.state.query} />
        <input type="submit" name="Submit"/>
      </form>
    );
  }
}

export default GifSearch;
