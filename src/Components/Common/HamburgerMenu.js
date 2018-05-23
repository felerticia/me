import React, { Component } from 'react';



class HamburgerMenu extends Component {
    componentDidMount() {
      setTimeout (function(){
          document.querySelector('.hamburger-menu').classList.remove('anim')
      },1000);
      document.querySelector('.hamburger-menu').addEventListener('click', () => {
        document.querySelector('.hamburger-menu').classList.toggle('animate');
        document.querySelector('.bar').classList.toggle('animate');
        document.querySelector('.mainNav').classList.toggle('animate');
    });
    }
    render() {
      return (
          <div className="hamburger-menu anim">
            <div className="bar"></div>	
          </div>
      );
    }
}

export default HamburgerMenu;



