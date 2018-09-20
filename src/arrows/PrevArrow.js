import React, { Component } from 'react'
import styles from '../styles.css'

class PrevArrow extends Component {
    constructor(props) {
        super(props)

        this.handlePrevClicked = this.handlePrevClicked.bind(this)
    }

    handlePrevClicked(e) {
        this.props.onClick(this.props)
    }

    render() {
        const buttonStyles = {
            backgroundColor: 'transparent',
            border: 'none',
            borderColor: 'none',
            cursor: 'pointer',
            position: 'absolute',
            float: 'left'
        }

        return(
            <div className={styles.prevArrow}>
                <button className="arrow right" style={buttonStyles}
                onClick={this.handlePrevClicked}>
                    <svg width="60px" height="80px" 
                        viewBox="0 0 50 80" >
                        <polyline fill="none" stroke="#FFFFFF" strokeWidth="1" 
                        strokeLinecap="round" strokeLinejoin="round" 
                        points="45.63,75.8 0.375,38.087 45.63,0.375 "/>
                    </svg> 
                </button>
            </div>
        )
    }
}

export default PrevArrow