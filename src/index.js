import React, { Component } from 'react'
import PropTypes from 'prop-types'

import defaultProps from './default-props';
import ImageCarousel from './ImageCarousel';
import NextArrow from './arrows/NextArrow';
import PrevArrow from './arrows/PrevArrow';

import styles from './styles.css'

class ReactSlidin extends Component {
  constructor(props) {
    super(props)

    this.state = {
        slidersChildren: this.props.children,
        currentSlider: this.props.children[0].props.children,
        currentSliders: this.mountSlider(this.props.children),
        sliderIndex: 0
    }

    this.initSlider(this.props)
  }

  initSlider(initialProps) {
    if(initialProps.autoPlay) {
        this.autoPlay(initialProps.speed);
    }
  }

  mountSlider(sliderChildren) {
    let currentSliderList = []

    sliderChildren.forEach((element,index) => {
        let image = {image: element.props.children.props.src, index: index};
        currentSliderList.push(image);
    })
    return currentSliderList;
  }

  handlePrevClicked = () => {
    let actualIndex = this.state.sliderIndex;

    if(actualIndex === 0) {
        actualIndex = this.state.slidersChildren.length - 1;
    }
    else {
        actualIndex--;
    }

    this.setState({
        sliderIndex: actualIndex,
        currentSlider: this.props.children[actualIndex].props.children
    });
  }
    
  handleNextClicked = () => {
      let actualIndex = this.state.sliderIndex;
      if(actualIndex < (this.state.slidersChildren.length-1)) {
          actualIndex++;
      }
      else {
          actualIndex = 0;
      }
      this.setState({
          sliderIndex: actualIndex,
          currentSlider: this.props.children[actualIndex].props.children
      });
  }

  autoPlay(speed) {
      setInterval(() => {
          this.handleNextClicked()
      }, speed); 
  }

  // static propTypes = {
  //   settings: PropTypes.object
  // }

  render() {
    let settings = { ...defaultProps, ...this.props };
     
    //  TODO
    if(settings.responsive) {

    }

    let sliderComponent = this.state.currentSliders;
    let activeIndex = this.state.sliderIndex

    return(
        <div className="sliderComponent" >
            React slidin
            <div className="sliderWrapper">
            {
                sliderComponent.map((element, index) => {
                    return (
                        <ImageCarousel element={element} key={index} 
                        index={index}
                        activeIndex={activeIndex} />
                    )
                })
            }

            {settings.arrows &&
                <div className="arrows" >
                    <PrevArrow  onClick={this.handlePrevClicked} />
                    <NextArrow  onClick={this.handleNextClicked} />
                </div>
            }
            </div>
        </div>
    )
  }
}

export default ReactSlidin
