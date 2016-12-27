import React, { Component } from 'react';

import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-default header-highlight">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">qMoney</a>
          <ul className="nav navbar-nav visible-xs-block">
            <li><a data-toggle="collapse" data-target="#navbar-mobile"><i className="icon-tree5"></i></a></li>
    				<li><a className="sidebar-mobile-main-toggle"><i className="icon-paragraph-justify3"></i></a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
