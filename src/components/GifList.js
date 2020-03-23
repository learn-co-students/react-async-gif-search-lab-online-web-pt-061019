import React from 'react';
// import { render } from 'react-dom';

const GifList = (props) => {
    return (
        <ul>
            {props.gifs.map(gif => {
                return (
                    <li>
                        <img src={gif.url} key={gif.id} alt={gif.title} />
                    </li>
                )
            })}
        </ul>
    )
}

export default GifList;