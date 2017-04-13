import React, { Component } from 'react';
import './SaveDateCard.scss';


class SaveDateCard extends Component {
  render() {
    return (
      <div className="SaveDateCard row align-center">
        <div className="inner column large-6">
          <div className="top">
            <div className="back">Welcome!</div>
            <div className="front">
              <h1>Save the date!</h1>
              <h2>6 - 9 July 2017</h2>
              Dubrovnik, Croatia
            </div>
          </div>
          <div className="bottom">
          <p>If you have any questions or request, we can be reached at</p>
          <a href="mailto:daniel@gabbie.se">daniel@gabbie.se</a>
          </div>
        </div>
      </div>
    );
  } 
}

export default SaveDateCard;
