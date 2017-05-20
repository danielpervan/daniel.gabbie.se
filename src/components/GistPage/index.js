import React, { Component } from 'react';
import SaveDateCard from '../SaveDateCard'
import TextBox from '../TextBox'


class GistPage extends Component {
  render() {
    return (
      <div>
        <TextBox title="Gifts and so on">
          <p>As is tradition some might be bringing gifts to satisfy our materialistic needs. In order to avoid duplicates and other misfortunes, this part is being coordinated by the lovely bridesmaids Weronica and Disa. They can be contacted at <a href="mailto:wedding.daniel.gabbie@gmail.com">wedding.daniel.gabbie@gmail.com</a>.</p>
          <p>To make it a tad easier to collaborate, we’ve created a marvellous Google Docs document containing a wish list that you can mark and comment on. Most further information regarding this will also be written in this document. You can find a link to it below:</p>
          <p><a href="https://docs.google.com/document/d/1-R-DGkixayKgS-_gNDaRv-5lAfUG89R3o5pFD-UBJzQ/edit?usp=sharing_eil&ts=59208ffb" className="button large">Open Document</a></p>
        </TextBox>
      	<TextBox title="Where are we staying?">
      		<p>All accommodation will be provided for you during your stay between July 6 and July 9. We will probably also make sure that you don't starve throught this event in some way or another.</p>
      		<p>There will be a few different arrangement for different guests, but most of you will likely be staying at <a href="http://www.pervanovoapartments.com/default-en.html">Pervanovo Apartments</a>.</p>
      		<h2>Prolonging my stay</h2>
      		<p>While accomodation will be free during the wedding, some of you might be thinking of seize the opportunity to take a well-deserved vacation before or after the event.</p>
      		<p>If you want to prolonge your stay, the apartments are available for rent. Contact Pervanovo at <a href="mailto:info@pervanovo.hr">info@pervanovo.hr</a>. Prices are available on the <a href="http://www.pervanovoapartments.com/default-en.html">website</a>.</p>
      	</TextBox>
        <SaveDateCard />
      </div>
    );
  } 
}

export default GistPage;