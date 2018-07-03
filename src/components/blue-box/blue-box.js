import React, { Component } from 'react';
import './blue-box.css';

class BlueBox extends Component {
    render() {

        return (
            <div className='blue-box'>
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

export default BlueBox;