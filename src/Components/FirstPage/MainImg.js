import React, { Component } from 'react';

import SvgWEB                from './SvgWeb';
import SvgAnim                from './SvgAnim';
import SvgMulti                from './SvgMulti';
import SvgDigital                from './SvgDigital';


import {  Link } from "react-router-dom";

class MainImg extends Component {

  render() {
    let returnValue = null;
    let returnURI = null;
    if (parseInt(this.props.svg,10) === 0) {
        returnValue = <SvgWEB />;   
        returnURI = "/websites"
    } 
    if (parseInt(this.props.svg,10) === 1) {
        returnValue = <SvgAnim />;  
        returnURI = "/animations" 
    } 
    if (parseInt(this.props.svg,10) === 2) {
        returnValue = <SvgMulti />; 
        returnURI = "/multimedia" 
    } 
    if (parseInt(this.props.svg,10) === 3) {
        returnValue = <SvgDigital />; 
        returnURI = "/digital" 
    } 
    return (
        
      <Link to={`${returnURI}`}  className="firstpage_Wrapper"  >
          {returnValue}
          <img src={this.props.path} alt="" />
      </Link>
    );
  }
}
export default MainImg;



