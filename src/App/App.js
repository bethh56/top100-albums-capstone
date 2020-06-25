import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import fbConnection from '../helpers/data/connections';

import Auth from '../components/Auth/Auth';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import AlbumsContainer from '../components/AlbumsContainer/AlbumsContainer';
import SingleAlbumContainer from '../components/SingleAlbumContainer/SingleAlbumContainer';
import Footer from '../components/Footer/Footer';

import './App.scss';

fbConnection();
class App extends React.Component {
  state = {
    authed: false,
    singleAlbumId: '',
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  viewSingleAlbum = (albumId) => {
    this.setState({ singleAlbumId: albumId });
  }

  render() {
    const { authed, singleAlbumId } = this.state;

    const loadComponent = () => {
      let componentToLoad = '';
      if (authed && singleAlbumId.length === 0) {
        componentToLoad = <AlbumsContainer viewSingleAlbum={this.viewSingleAlbum}/>;
      } else if (authed && singleAlbumId.length > 0) {
        componentToLoad = <SingleAlbumContainer albumId={singleAlbumId} viewSingleAlbum={this.viewSingleAlbum}/>;
      } else {
        componentToLoad = <Auth />;
      }
      return componentToLoad;
    };

    return (
      <div className="App">
        <MyNavbar authed={authed}/>
        {loadComponent()}
        <Footer />
      </div>
    );
  }
}

export default App;
