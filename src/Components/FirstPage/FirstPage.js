import React, { Component } from 'react';

import firstpage_web        from '../../images/web.png';
import firstpage_anim       from '../../images/pair.png';
import firstpage_multi      from '../../images/multi.png';
import firstpage_print      from '../../images/print.png';

import HamburgerMenu        from '../Common/HamburgerMenu';
import MainNav              from '../Common/MainNav';

import Title                from '../Common/Title';
import Scroller             from '../Common/Scroller';
import MainImg              from './MainImg';

class FirstPage extends Component {
  render() {
    return (
        
        <div className="firstPage">
            <div className="mainContent">
                <HamburgerMenu/>
                <MainNav/>
                <Title title="Amir Shahbabaee" subtitle="Designer . Developer"/>
                <Scroller/>
            </div>
            <div className="horizontalLineBreak"></div>
            <div className="mainContent" id="section2">
                <MainImg svg="0" path={firstpage_web}/>
                <MainImg svg="1" path={firstpage_anim}/>
                <MainImg svg="2" path={firstpage_multi}/>
                <MainImg svg="3" path={firstpage_print}/>
            </div>
        </div>
        

       
    );
  }
}

export default FirstPage;



