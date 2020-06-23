import React from 'react';

import MyNavbar from '../components/MyNavbar/MyNavbar';
import AlbumsContainer from '../components/AlbumsContainer/AlbumsContainer';
import SingleAlbumContainer from '../components/SingleAlbumContainer/SingleAlbumContainer';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyNavbar />
        <AlbumsContainer />
        <SingleAlbumContainer />
      </div>
    );
  }
}

export default App;
