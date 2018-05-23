import React, { Component }       from 'react';

import HamburgerMenu              from '../Common/HamburgerMenu';
import MainNav                    from '../Common/MainNav';

import Title                      from '../Common/Title';
import Scroller                   from '../Common/Scroller';

import ProjectItem                from '../Common/ProjectItem';

import Projects_List              from '../Common/Projects_List';

class ProjectList extends Component {

  constructor(){
      super();
      this.state = {
        uri : window.location.href,
        items : [],
        subtitles : {
          'Websites'   : 'I have been lucky enough to have the pleasure of Designing and Programming Websites for the past 14 years. My extended experience in web development, js programming, complicated HTML coding gives me the assurance to say that I can provide you with the whole package when it comes to business oriented projects. Here is a brief list of my recent projects',
          'Animations' : 'To create fun, interesting, and professional 2d animation that people will remember. my ex-wife and I won at an animation award festival in Tehran for "Best animation for a song". I\'ve grown my portfolio and delivered valueable flash-based applications for various companies',
          'Multimedia' : 'As a flash-based app developer with lots of experience migrating to javascript, I am confident that I could create astonishing products and deliver incredible values to my customer.',
          'Digital'    : 'I am a very meticulous designer, always injecting passion into my work. I love taking different kinds of projects wheter it is your branding, business plan or webdesign,  I will help you hone in on the right design and messaging.'
        }
      }
  }

  componentWillMount(){
    let uri = this.state.uri.split('/')
    if (uri[uri.length-1] === '')
      uri.pop();
    let newURI = uri.pop();
    let items = Projects_List
      .filter (project => project.type === newURI)
      .map( project => 
            <ProjectItem 
              key={project.name}  
              name={project.name} 
              thumb={'/' + newURI+'_Thumb/'+project.image} 
              image={newURI+'/'+project.image} 
              id = {project.id}
              desc={project.desc} />)
    this.setState ({items : items})
  }
 
  render() {
    let uri = this.state.uri.split('/')
    if (uri[uri.length-1] === '')
      uri.pop();
    let newURI = uri.pop();
    newURI = newURI.charAt(0).toUpperCase() + newURI.slice(1);
    return (
        <div className="innerPage">
            <div className="mainContent">
                <HamburgerMenu/>
                <MainNav/>
                <Title title={newURI} subtitle={this.state.subtitles[newURI]}/>
                <Scroller/>
            </div>
            <div className="horizontalLineBreak"></div>
            <div className="mainContent" id="section2">
               {this.state.items}
            </div>
        </div>
    );
  }
}

export default ProjectList;





