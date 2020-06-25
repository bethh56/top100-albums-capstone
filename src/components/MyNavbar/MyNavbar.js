import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;

    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <h1 className="navbar-brand">Top 100 Albums</h1>
          {
            authed
              ? <button className="btn btn-dark" onClick={this.logMeOut}>Logout</button>
              : ''
          }
        </nav>
      </div>
    );
  }
}

export default MyNavbar;
