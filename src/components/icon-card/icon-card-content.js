import React, { Component } from 'react';

class IconCardContent extends Component {

    render() {
        const cardContentStyle = {
            textAlign: 'left',
            fontSize: '0.8rem',
            padding: '0 2rem 1rem'
        }
        return (
            <div style={cardContentStyle}>
                {this.props.children}
            </div>
        )
    }
}

export default IconCardContent;