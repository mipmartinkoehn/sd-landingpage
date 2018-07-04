import React, { Component } from 'react';
import Bubbles from '../../images/bubbles.png';

class BlueBox extends Component {
    render() {
        const blueBoxStyle = {
            background: `url(${Bubbles}) left bottom`,
            backgroundColor: '#00567A',
            backgroundRepeat: 'no-repeat',
            padding: '4rem 0',
            position: 'relative',
            width: '100%!important',
            color: '#fff'
        };

        return (
            <div style={blueBoxStyle}>
                <div className='center-mode'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default BlueBox;