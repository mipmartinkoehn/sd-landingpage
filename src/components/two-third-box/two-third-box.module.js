import React, { Component } from 'react';
import styles from './two-third-box.module.css';

class TwoThirdBox extends Component {

    renderContent() {
        if (this.props.textpos === 'right') {
            return (
                <div className={styles.parentFlex}>
                    <div className={styles.onethird}>
                        <img src={this.props.imgSrc} />
                    </div>
                    <div className={styles.twothird}>
                        {this.props.children}
                    </div>
                </div>
            )
        } else {
            return (
                <div className={styles.parentFlex}>
                    <div className={styles.twothird}>
                        {this.props.children}
                    </div>
                    <div className={styles.onethird}>
                        <img src={this.props.imgSrc} />
                    </div>
                </div>
            )

        }
    }
    render() {
        return (
            this.renderContent()
        )
    }
}

export default TwoThirdBox;