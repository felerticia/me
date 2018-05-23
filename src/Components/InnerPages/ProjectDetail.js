import React, { Component }       from 'react';

import HamburgerMenu              from '../Common/HamburgerMenu';
import MainNav                    from '../Common/MainNav';

import Title                      from '../Common/Title';
import Scroller                   from '../Common/Scroller';

import Projects_List              from '../Common/Projects_List';


class ProjectDetail extends Component {
  render() {
    let item = Projects_List.find( x => x.id === this.props.location.state.id)
    return (
        <div className="innerPage">
            <div className="mainContent">
                <HamburgerMenu/>
                <MainNav/>
                <Title title={item.name} subtitle={item.desc}/>
                <Scroller/>
            </div>
            <div className="horizontalLineBreak"></div>
            <div className="mainContent" id="section2">
              <div className="projectDetail">
                <img src=""/>
              </div>
            </div>
        </div>
    );
  }
}

export default ProjectDetail;