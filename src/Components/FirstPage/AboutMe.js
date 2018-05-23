import React, { Component } from 'react';

import HamburgerMenu        from '../Common/HamburgerMenu';
import MainNav              from '../Common/MainNav';

class FirstPage extends Component {
  render() {
    return (
        <div className="innerPage">
            <div className="mainContent">
                <HamburgerMenu/>
                <MainNav/>
            </div>
            Amir
        </div>
    );
  }
}

export default FirstPage;



