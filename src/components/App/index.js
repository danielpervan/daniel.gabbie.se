import React, { Component } from 'react';
import './App.scss';
import Flare from '../Flare'
import $ from 'jquery'
import '../firebase'
import PageHeader from '../PageHeader'

class App extends Component {
  constructor(props) {
    super()
    this.flares = []
    generateFlares(this.flares)
    $(window).resize(() => {
      this.flares = []
      generateFlares(this.flares)
    })
    this.state = {
      uid: null,
      isAnonymous: true,
      name: null,
    }
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        
        // User is signed in.
        this.setState({
          ...this.state,
          uid: user.uid,
          isAnonymous: user.isAnonymous,
          name: user.displayName,
          email: user.email
        })
      } else {
        // User is signed out.
        // This should really never happen, but since it somehow does and I'm too tired to actually fix it, I'm gonna bodge a fix
        this.setState({
          ...this.state,
          uid: Math.random().toString(36).slice(2),
          isAnonymous: true
        })
      }
    }.bind(this))
  }

  componentDidMount() {
    $('.flares').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', () => {
      setTimeout(() => {
        $(document).on('mousemove', (ev) => {
          animateFlares(ev.pageX, ev.pageY)
        })
        //animateFlares(Math.random()*$(document).width(), Math.random()*$(document).height())
      },300)
    })

    $(()=>{
      $('.flares').css({
        animationName: 'initFlares'
      })
    })
  }

  getChildContext() {
    return {
      uid: this.state.uid
    }
  }

  render() {
    return (
      <div className="App">
        <div className="flares">{this.flares}</div>
        <PageHeader page={this.props.router.getCurrentLocation().pathname}/>
        <div id="AppContent">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.childContextTypes = {
  uid: React.PropTypes.string
}


function generateFlares(storage) {
  for (var i=0; i<100; i++) {
      storage.push(<Flare key={i}/>)
  }
  
}

function animateFlares(x,y) {
  const perspective = {
    x: 100*x/$(document).width(),
    y: 100*y/$(document).height()
  }
  $(".flares").css({
    perspectiveOriginX: perspective.x,
    perspectiveOriginY: perspective.y
  })
}



export default App;
