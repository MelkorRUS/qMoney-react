import React, { Component } from 'react';
import { Link } from 'react-router'
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar sidebar-main">
        <div className="sidebar-content">
          <div className="sidebar-category sidebar-category-visible">
            <div className="category-content no-padding">
              <ul className="navigation navigation-main navigation-accordion">
                <li className="active">
                  <Link to="/accounts"><i className="icon-home4"></i> <span>Кошельки</span></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
