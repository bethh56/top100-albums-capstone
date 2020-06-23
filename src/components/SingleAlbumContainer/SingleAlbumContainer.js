import React from 'react';
import SingleAlbummCard from './SingleAlbum/SingleAlbum';

import './SingleAlbum.scss';

class SingleAlbumContainer extends React.Component {
  render() {
    return (
     <div className="SingleAlbumContainer">
       <h1>Single Album</h1>
       <SingleAlbummCard />
     </div>
    );
  }
}

export default SingleAlbumContainer;
