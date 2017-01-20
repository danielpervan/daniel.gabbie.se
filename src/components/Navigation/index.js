import React, { Component } from 'react'
import './Navigation.scss'

import 'font-awesome/scss/font-awesome.scss'

class Navigation extends Component {
  componentDidMount() {
    $(document).foundation()
  }

  render() {
    return (
      <div className="Navigation">
        <div className="title-bar" data-responsive-toggle="largeNavigation" data-hide-for="medium">
          <button className="menu-icon" type="button" data-toggle="largeNavigation"></button>
        </div>
        <div className="" id="largeNavigation" data-animate="animateShow animateHide">
          <div className="row column large-9">
            <ul className="menu medium-expanded vertical">
              <li className="active">
                <a href="#">The gist of it</a>
              </li>
              <li className="disabled">
                <i className="fa fa-lock" aria-hidden="true"></i>About Dubrovnik
              </li>
              <li className="disabled">
               <i className="fa fa-lock" aria-hidden="true"></i>Clothing tutorial
              </li>
              <li className="disabled">
                <i className="fa fa-lock" aria-hidden="true"></i>I want to participate!
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } 
}

export default Navigation;
