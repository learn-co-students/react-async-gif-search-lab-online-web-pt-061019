import React, { Component } from "react";

class GifSearch extends Component {
    constructor(){
        super()
        this.state = {
            query: ''
        } 
    }

    handleChange(e){
        this.setState({
            query: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.handleSubmit(this.state.query)
    }
    render(){
        return(
            
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input type="text" name="query" onChange={e => this.handleChange(e)} value={this.state.query} />
                    <input type="submit" name="Submit"/>
                </form>
            
        )
    }
}

export default GifSearch