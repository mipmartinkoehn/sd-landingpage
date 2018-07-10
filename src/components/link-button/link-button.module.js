import React, { Component } from 'react';
import Link from 'gatsby-link';
import styles from './link-button.module.css';

class LinkButton extends Component {

    render() {
        const { to, maxWidth, bgColor, color, external } = this.props;
        const additionalStyles = {
            background: bgColor, //#B81135,
            maxWidth: maxWidth,
            color: color
        };
        if (!external) {
            return (
                <Link to={to} className={styles.primaryActionButton} style={additionalStyles}>{this.props.children}</Link>
            )
        } else {
            return (
                <a href={to} className={styles.primaryActionButton} style={additionalStyles}>{this.props.children}</a>
            )
        }
    }
}

export default LinkButton;