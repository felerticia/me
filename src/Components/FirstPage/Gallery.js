import React, { Component } from 'react';
import ReactDOM             from 'react-dom';

import firstpage_web        from '../../images/firstpage_web.jpg';
import firstpage_anim       from '../../images/firstpage_anim.jpg';
import firstpage_multi      from '../../images/firstpage_multi.jpg';
import firstpage_print      from '../../images/firstpage_print.jpg';

import HamburgerMenu        from '../Common/HamburgerMenu';
import MainNav              from '../Common/MainNav';

import Title                from './Title';
import Scroller             from './Scroller';
import MainImg              from './MainImg';


class FirstPage extends Component {
  render() {
    return (
        <div className="firstPage">
            <div className="mainContent">
                <HamburgerMenu/>
                <MainNav/>
                <Title/>
                <Scroller/>
            </div>
            <div className="horizontalLineBreak"></div>
            <div className="mainContent" id="section2">
                <MainImg path={firstpage_web}/>
                <MainImg path={firstpage_anim}/>
                <MainImg path={firstpage_multi}/>
                <MainImg path={firstpage_print}/>
            </div>
        </div>
    );
  }
}

export default FirstPage;



