import React, { Component } from 'react'

import styles from './styles.css'

class ImageCarousel extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let imageSrc = this.props.element.image;

        let activeSlider, classActive="";
        if(this.props.activeIndex === this.props.index) {
            activeSlider = true;
            classActive = "active"
        }
        
        return(
            <div className={'sliderImage '  + classActive}>
                {(activeSlider) &&
                    <img src={imageSrc} />
                }
            </div>
        )
    }
}

export default ImageCarousel