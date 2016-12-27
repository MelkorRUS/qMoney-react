import React, { Component } from 'react';

import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="page-container">
          <div className="page-content">
            <Sidebar />
            <div className="content-wrapper">
              <div className="content">
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
