import React, { Component } from 'react';
import './Flare.scss';
import $ from 'jquery'

import Flare20 from '../../images/Flare_20.png'
import Flare10 from '../../images/Flare_10.png'
import Flare8 from '../../images/Flare_8.png'

class Flare extends Component {
	constructor(props) {
		super(props)

		$(window).resize(() => {
			this.forceUpdate()
    	})
    	this.xRandom = Math.random()
    	this.yRandom = Math.random()
    	this.factorRandom = Math.random();
	}
	render() {
		const factor = this.factorRandom
		const x = this.xRandom * ($( window ).width()-85) * 0.80
		const y = this.yRandom * ($( window ).height() - 85) * 0.80
		const bg = factor > 0.75 ? Flare20 : factor > 0.50 ? Flare10 : Flare8
		const style = {
		  transform: 'translate3d(' + x + 'px,' + y + 'px,' + factor*-300 + 'px)',
		  backgroundImage: 'url("'+bg+'")'
		  //filter: 'blur(' + (5+30*factor) + 'px)'
		}
		return (<div className="flare" style={style}></div>)
	}
  
}

export default Flare;