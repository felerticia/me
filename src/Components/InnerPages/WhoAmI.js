import React, { Component } from 'react';

import HamburgerMenu        from '../Common/HamburgerMenu';
import MainNav              from '../Common/MainNav';

import Title                from '../Common/Title';
import Scroller             from '../Common/Scroller';

class FirstPage extends Component {
  render() {
    return (
        
        <div className="innerPage">
            <div className="mainContent">
                <HamburgerMenu/>
                <MainNav/>
                <Title/>
                <Scroller/>
            </div>
            <div className="horizontalLineBreak"></div>
            <div className="mainContent" id="section2">
            </div>
        </div>
        

       
    );
  }
}

export default FirstPage;



