import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import AlbumCards from '../AlbumsContainer/AlbumCards/AlbumCards';
import albumsData from '../../helpers/data/albumsData';
import './Auth.scss';

class Auth extends React.Component {
  state = {
    albums: [],
  }

  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  componentDidMount() {
    albumsData.getAlbums()
      .then((albums) => this.setState({ albums }))
      .catch((err) => console.error('unable to display albums', err));
  }

  render() {
    const { albums } = this.state;
    const displayAlbumsLoggedOut = albums.map((album) => <AlbumCards key={album.id} album={album}/>);

    return (
      <div className="Auth container mt-3">
        <button className="loginBtn" onClick={this.loginClickEvent}>Login with Google</button>
        <div className="d-flex flex-wrap">
        { displayAlbumsLoggedOut }
        </div>
      </div>
    );
  }
}

export default Auth;
