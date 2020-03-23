import React from 'react'

export default class GifList extends React.Component {

  // if (this.props.whatever && this.props.whatever.map) {
  // this.props.whatever.map(prop => {

  renderGifs = () => {
    // console.log(this.props.gifs)
    let allGifs = this.props.gifs.map(gif => <li><img key={gif.url} src={gif.url} alt="gif"/></li>)
    return allGifs
  }

  // render(props) {
  //   console.log(props)
  //   return (
  //     <div>
  //         {props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif"/>)}
  //     </div>
  //   )
  // }

  render() {
    return (
      <ul>
        {this.renderGifs()}
      </ul>
    )
  }

}


// const GifList = props => {
//   console.log(props);
//   return (
//     <div>
//         {props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif"/>)}
//     </div>
//   )
// }
//
// export default GifList
