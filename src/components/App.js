import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'

// export class App extends React.Component {


//   render() {
//     return (
//       <div>
//         < NavBar color='black' title="Giphy Search" />
//         <GifListContainer />
//       </div>
//     );
//   }
// }

// export default App;


// the App component should render out the GifListContainer component

const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        < GifListContainer />
    </div>
  )
}

export default App
