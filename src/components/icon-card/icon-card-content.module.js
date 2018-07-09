import React, { Component } from 'react';
import styles from './icon-card-content.module.css';

class IconCardContent extends Component {

    render() {
        return (
            <div className={styles.cardContentStyle}>
                {this.props.children}
            </div>
        )
    }
}

export default IconCardContent;