import React, { Component } from 'react';
import './TextBox.scss'


class TextBox extends Component {
  render() {
  	const title = this.props.title ? <h1>{this.props.title}</h1> : '';
    return (
    	<div className="TextBox row align-center">
    		<div className="content column large-8">
    		{title}
    		{this.props.children}
    		</div>
    	</div>
    );
  } 
}

export default TextBox