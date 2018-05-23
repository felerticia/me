import React, { Component } from 'react';
import './css/style.css';

import FirstPage from './Components/FirstPage/FirstPage'
import Scroller from './Components/Common/Scroller'

import WhoAmI from './Components/InnerPages/WhoAmI'

import ProjectList from './Components/InnerPages/ProjectList'
import ProjectDetail from './Components/InnerPages/ProjectDetail'

import { BrowserRouter as Router, Route } from "react-router-dom";



class App extends Component {
  render() {
    
    return (
      <Router>
        <div className="App">
        
          <Route path="/" exact component={FirstPage} />
          <Route path="/whoami" component={WhoAmI} />
          <Route path="/where" component={Scroller} />

          <Route path="/websites" component={ProjectList}  />
          <Route path="/animations" component={ProjectList}  />
          <Route path="/multimedia" component={ProjectList}  />
          <Route path="/digital" component={ProjectList}  />

          <Route path="/projectDetail" component={ProjectDetail} />

        </div>
      </Router>
    );
  }
}

export default App;



