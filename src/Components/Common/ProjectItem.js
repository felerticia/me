import React, { Component } from 'react';


import LazyLoad from 'react-image-lazy-load';

import { Link } from "react-router-dom";


class ProjectItem extends Component {
  render() {
    return (
      <Link className="projectItemHolder" to={{pathname: '/projectDetail', state: {id : this.props.id}}}>
        <div className="projectItem">
          <h1>{this.props.name}</h1>
          <div className="imageLoaderLoading">
            <span>{'{'}</span><span>{'}'}</span>
          </div>
          <LazyLoad height={400} offsetTop={0} imageProps={{
            src: this.props.thumb,
            alt: this.props.name,
            ref: "image",
          }} />

        </div>
        </Link>
    );
  }
}

export default ProjectItem;



     
