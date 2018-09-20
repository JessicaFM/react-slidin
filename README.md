# react-slidin

> React image slider

[![NPM](https://img.shields.io/npm/v/react-slidin.svg)](https://www.npmjs.com/package/react-slidin) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-slidin
```

## Usage

```jsx
import React, { Component } from 'react'

import ReactSlidin from 'react-slidin'

class Example extends Component {
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
    )
  }
}
```

## License

MIT © [jessicaFM](https://github.com/jessicaFM)
