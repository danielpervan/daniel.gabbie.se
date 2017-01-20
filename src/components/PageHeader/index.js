import React, { Component } from 'react';
import './PageHeader.scss';
import Navigation from '../Navigation'

class PageHeader extends Component {
  render() {
    return (
      <div className="PageHeader">
        <div className="bannerContainer row collapse">
          <div id="mainBanner" className="column large-12">
        		<div className="leftEdge edge"></div>
        		<div className="center">
  	        	<div className="content">
  	        		<div className="inner">The Wedding of Daniel and Gabriella</div>
  	        	</div>
          	</div>
          	<div className="rightEdge edge"></div>
          </div>
        </div>

        <Navigation/>
      </div>
    );
  }
}

export default PageHeader;
