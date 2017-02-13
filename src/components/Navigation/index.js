import React, { Component } from 'react'
import './Navigation.scss'
import {Link} from 'react-router'
import 'font-awesome/scss/font-awesome.scss'

class Navigation extends Component {
  componentDidMount() {
    $(document).foundation()
  }

  isCurrentPage(page) {
    if (typeof this.props.page === "undefined") {
      return false
    }
    return '/'+page.toLowerCase() === this.props.page.toLowerCase() ? 'active' : ''
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
              <li className={this.isCurrentPage('')}>
                <Link to="/">The gist of it</Link>
              </li>
              <li className="disabled">
                <i className="fa fa-lock" aria-hidden="true"></i>About Dubrovnik
              </li>
              <li className={this.isCurrentPage('dresscode')}>
               <Link to="dresscode">Clothing tutorial</Link>
              </li>
              <li className={this.isCurrentPage('signup')}>
                <Link to="signup">I want to participate!</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } 
}

export default Navigation;
