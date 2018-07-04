import React, { Component } from 'react';
import Link from 'gatsby-link';

class LinkedButton extends Component {
    
    render() {
        const { to, maxWidth, bgColor, color, external } = this.props;
        const buttonStyle = {
            display: 'inline-block',
            maxWidth: maxWidth ,
            background: bgColor, //'#B81135',
            padding: '10px 20px',
            textAlign: 'center',
            borderRadius: '30px',
            color: color,
            fontWeight: 'bold',
            textDecoration: 'none'
          }
        if (!external) {
            return (
                <Link to={to} style={buttonStyle}>{this.props.children}</Link>
            )
        } else {
            return (
                <a href={to} style={buttonStyle}>{this.props.children}</a>
            )
        }
    }
}

export default LinkedButton;