import React, { Component} from 'react';
import styles from './icon-card.module.css';

class IconCard extends Component {

    render() {
        return (
            <div className={styles.cardStyle}>
                <div className={styles.iconStyle}>
                    <img src={this.props.imgSrc} />
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default IconCard;