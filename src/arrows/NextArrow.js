import React, { Component } from 'react'


class NextArrow extends Component {
    constructor(props) {
        super(props)

        this.handleNextClicked = this.handleNextClicked.bind(this)
    }

    handleNextClicked() {
        this.props.onClick(this.props)
    }

    render() {
        const buttonStyles = {
            backgroundColor: 'transparent',
            border: 'none',
            borderColor: 'none',
            cursor: 'pointer',
            position: 'absolute',
            top: '8px',
            right: '0px'
        }

        return(
            <div className="nextArrow">
                <button className="arrow left"  style={buttonStyles}
                onClick={this.handleNextClicked}>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        width="60px" height="80px" viewBox="0 0 50 80" >
                        <polyline fill="none" stroke="#FFFFFF" 
                        strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                        points=" 0.375,0.375 45.63,38.087 0.375,75.8 "/>>
                    </svg>
                </button>
            </div>
        )
    }
}

export default NextArrow