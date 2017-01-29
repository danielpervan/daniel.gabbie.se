import React, { Component } from 'react';
import App from '../App'
import TextBox from '../TextBox'
import './DressCodePage.scss'
import davincifrack from '../../images/davincifrack.png'

class DressCodePage extends Component {
  render() {
    return (
      <App page="dresscode">
        <TextBox title="Clothing tutorial">
          <p>Clothes are an important part of every persons life. They protect you from mosquitoes and bad weather. They can also be used as an emergency climping rope to get away from sticky situations.</p>
          <p>Clothes will thusly be required at this wedding. There will also be a code for how to dress properly; a dress code if you like. That dress code is tailcoat for the gentlemen (också känd som <i>frack</i>) and long dress for the gentlewomen (också känd som <i>långklänning</i>).</p>
          <p>You will also be needing a swimsuit and a clean shirt with accessories (like pants, e.t.c) and/or summer dress for the Friday dinner.</p>
  	    </TextBox>
        <div id="davincifrack"><img src={davincifrack} alt="Vitruvian Tailcoat"/></div>
        <TextBox title="Rent-a-tailcoat">
          <p>If you don't own a tailcoat and don't want to spend more than two minutes investigating a solution to this life crisis that has suddenly been brought to your doorstep, we have just the right fix for you.</p>
          <p>Here follows a step-by-step guide for making sure that you have a tailcoat on your body:</p>
          <ol>
            <li>Reach out and grab the closest measuring tape, ruler or ögonmått.</li>
            <ul>
            <li>Measure around your neck</li>
            <li>Measure your shoulders</li>
            <li>Measure your chest</li>
            <li>Measure your waist</li>
            <li>Measure inner length of your thighs</li>
            <li>Measure your length</li>
            </ul>
          <li>Look inside your shoes and note the number designating their size.</li>
          <li>Look inside your trousers and note the number designating their size</li>
          <li>Look inside a jacket and note the number designating its size</li>
          <ul>
            <li>If you don't own a jacket, guesstimate.</li>
          </ul>
          </ol>

          <p>After writing down these measurements, you should then call <a href="http://www.anina.se/">Anina Brud & Festspecialisten</a> and tell them that you want to convert these measurements into a tailcoat rental. We have already negotiated a package deal with them so make sure to tell them that you are going to Gabriella and Daniel's wedding.</p>
          <p>The price should be 1&nbsp;200 SEK. Shoes and cufflinks are however not included in the price. If you don't live near Helsingborg, the shipping fee is 167 SEK each way.</p>
          <h3>Anina Brud & Festspecialisten</h3>
          Ängelholmsvägen 31<br/>
          254 53 Helsingborg<br/>
          042-13&nbsp;27&nbsp;09<br/>
          <a href="mailto:info@anina.se">info@anina.se</a>
        </TextBox>
      </App>
    );
  } 
}

export default DressCodePage