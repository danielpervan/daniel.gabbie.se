import React, { Component } from 'react';
import './App.css';
import PageHeader from '../PageHeader'
import Flare from '../Flare'
import SaveDateCard from '../SaveDateCard'
import $ from 'jquery'


class App extends Component {
  constructor(props) {
    super()
    this.flares = []
    generateFlares(this.flares)
    $(window).resize(() => {
      this.flares = []
      generateFlares(this.flares)
    })
  }



  componentDidMount() {
    $('.flares').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', () => {
      setTimeout(() => {
        $(document).on('mousemove', (ev) => {
          animateFlares(ev.pageX, ev.pageY)
        })
        animateFlares(Math.random()*$(document).width(), Math.random()*$(document).height())
      },300)
    })

    $(()=>{
      $('.flares').css({
        animationName: 'initFlares'
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="flares">{this.flares}</div>
        <PageHeader/>
        {true && <SaveDateCard/>}
      </div>
    );
  }
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
