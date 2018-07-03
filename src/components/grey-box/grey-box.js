import React, { Component } from 'react'
import './grey-box.css';

class Greybox extends Component {
    render() {
        return (
            <div className='grey-box'>
                <div style={{
                    margin: '0 auto',
                    maxWidth: 960,
                    padding: '0.5rem 1.0875rem 0.5rem',
                    paddingTop: 0,
                }}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Greybox;