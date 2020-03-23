import React, {Component} from 'react'

class GifSearch extends Component {
    state = {
        query: ''
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.fetchGifs(this.state.query)
    }

    handleSearchChange = e => {
        e.persist()
        this.setState({
            query: e.target.value
        })
    }

    render(){
        return(
            <div>
                <p>Enter a Search Term:</p>
                <form onSubmit={this.handleSubmit} className='gifSearch'>
                    <input 
                        name='search'
                        type='text' 
                        onChange={this.handleSearchChange} 
                        value={this.state.query}  
                        />
                    <input type='submit' value='Find Gifs' />
                </form>
            </div>
        )
    }
}

export default GifSearch;