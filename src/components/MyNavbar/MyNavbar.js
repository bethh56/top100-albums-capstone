import React from 'react';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-light">
          <h1 class="navbar-brand">Top 100 Albums</h1>
        </nav>
      </div>
    );
  }
}

export default MyNavbar;
