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
      <div className="MyNavbar">
        <nav className="navbar">
          <h1 className="navbar-brand navFont">Top 100 Albums <i class="fas fa-record-vinyl"></i></h1>
          {
            authed
              ? <button className="logout" onClick={this.logMeOut}>Logout</button>
              : ''
          }
        </nav>
      </div>
    );
  }
}

export default MyNavbar;
