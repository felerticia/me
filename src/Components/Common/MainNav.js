import React, { Component } from 'react';

import { Link } from "react-router-dom";

class MainNav extends Component {
    render() {
      return (
        <nav className="mainNav">
            <div className="rotate"></div>
            <div className="rotate"></div>
            <div className="rotate"></div>
            <div className="rotate"></div>
            <ul>
                <li className=""><Link to="/" >What I do?</Link></li>
                <li className=""><Link to="/whoami" >Who am I?</Link></li>
                <li className=""><Link to="/where" >Where 2 find me?</Link></li>
            </ul>
        </nav>
      );
    }
}

export default MainNav;




