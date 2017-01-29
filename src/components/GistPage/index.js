import React, { Component } from 'react';
import SaveDateCard from '../SaveDateCard'
import App from '../App'

import TextBox from '../TextBox'


class GistPage extends Component {
  render() {
    return (
      <App page="gist">
      	<TextBox title="Where are we staying?">
      		<p>All accommodation will be provided for you during your stay between July 6 and July 9. We will probably also make sure that you don't starve throught this event in some way or another.</p>
      		<p>There will be a few different arrangement for different guests, but most of you will likely be staying at <a href="http://www.pervanovoapartments.com/default-en.html">Pervanovo Apartments</a>.</p>
      		<h2>Prolonging my stay</h2>
      		<p>While accomodation will be free during the wedding, some of you might be thinking of seize the opportunity to take a well-deserved vacation before or after the event.</p>
      		<p>If you want to prolonge your stay, the apartments are available for rent. Contact Pervanovo at <a href="info@pervanovo.hr">info@pervanovo.hr</a>. Prices are available on the <a href="http://www.pervanovoapartments.com/default-en.html">website</a>.</p>
      	</TextBox>
        <SaveDateCard />
      </App>
    );
  } 
}

export default GistPage;