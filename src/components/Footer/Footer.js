import React from 'react';
import moment from 'moment';

import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <footer> Nielsen {moment().format('YYYY')} </footer>
      </div>
    );
  }
}

export default Footer;
