import React, { Component } from 'react'

import ReactSlidin from 'react-slidin'

class App extends Component {
  
  render () {
    var settings = {
      arrows: true,
      autoPlay: true,
      dots: true,
      infinite: true,
      speed: 5000, //ms-> 1000ms=1s
      slidesToShow: 4,
      slidesToScroll: 4,
    };

    
    return (
      <div>
        <ReactSlidin {...settings}>
          <div className="">
            <img src="/assets/img/img1.jpg" />
          </div>
          <div className="">
            <img src="/assets/img/img2.jpg" />
          </div>
          <div className="">
            <img src="/assets/img/img3.jpg" />
          </div>
          <div className="">
            <img src="/assets/img/img4.jpg" /> 
          </div>
        </ReactSlidin>
      </div>
    )
  }
}

export default App