import React from 'react';

import './UserAlbums.scss';

class UserAlbums extends React.Component {
  state = {
    haveListened: false,
  }

  haveListenedCheckbox = (e) => {
    this.setState({ haveListened: e.target.checked });
  }

  render() {
    const { haveListened } = this.state;

    return (
      <div>
        <label className="mr-1"> Have you listened to this album?</label>
                <input
                  type="checkbox"
                  checked={haveListened}
                  id="haveListenedToAlbum"
                  onChange={this.haveListenedCheckbox}
                />
      </div>
    );
  }
}

export default UserAlbums;
