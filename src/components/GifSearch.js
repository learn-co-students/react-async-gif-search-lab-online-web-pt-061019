import React, { Component } from 'react';

class GifSearch extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  //   handleSubmit = (event) => {
  //     event.preventdefault();
  //     // console.log(event);
  //     debugger;
  //     this.props.handleSearch(event);
  //   };

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.props.handleSearch(event)}>
          Enter a Search Term:
          <input
            type='text'
            name='search'
            value={this.state.search}
            onChange={(event) => this.setState({ search: event.target.value })}
          />
          <input type='submit' value='Find Gifs' />
        </form>
      </div>
    );
  }
}

export default GifSearch;
