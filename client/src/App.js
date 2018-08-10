import React, { Component } from 'react';
import Navigation from './navigation/Navigation';

import './App.css';
import Content from "./Content";

class App extends Component {
  render() {
    return (
      <div className="main">
          <Navigation/>
          <Content/>
      </div>
    );
  }
}

export default App;
