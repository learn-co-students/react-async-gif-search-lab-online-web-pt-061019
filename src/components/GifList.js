import React from 'react';

const GifList = (props) => {
  return(
    <div>
    <br/>
      <ul>
        {props.gifs.map(gif => <li><img key={gif.id} src={gif.url} alt="gif" /></li>)}
      </ul>
    </div>
  )
}

export default GifList;
