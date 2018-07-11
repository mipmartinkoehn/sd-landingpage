import React, { Component } from 'react';
import styles from './blue-box.module.css';

class BlueBox extends Component {
    render() {
        return (
            <div className={styles.blueBoxStyle}>
                <div className='center-mode'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default BlueBox;