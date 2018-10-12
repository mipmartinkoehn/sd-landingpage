import React, { Component } from 'react';
import styles from './icon-card-flex.module.css';

class CardFlexGroup extends Component {
  render() {
    return (
      <div className={styles.CardFlexGroup}>
        {this.props.children}
      </div>
    )
  }
}

export default CardFlexGroup;