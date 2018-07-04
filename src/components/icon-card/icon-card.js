import React, { Component} from 'react';

class IconCard extends Component {

    render() {
        const cardStyle = {
            width: '300px',
            minHeight: '360px',
            borderTop: '#006185 4px solid',
            WebkitBoxShadow: '1px 1px 8px 0px rgba(50, 50, 50, 0.35)',
            MozBoxShadow: '1px 1px 8px 0px rgba(50, 50, 50, 0.35)',
            BoxShadow: '1px 1px 8px 0px rgba(50, 50, 50, 0.35)'
        };

        const iconStyle = {
            margin: '1rem 0'
        };

        return (
            <div style={cardStyle}>
                <div style={iconStyle}>
                    <img src={this.props.imgSrc} />
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default IconCard;