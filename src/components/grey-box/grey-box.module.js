import React, { Component } from 'react'
import styles from './grey-box.module.css'

class Greybox extends Component {
  render() {
    return (
      <div className={styles.greyBoxStyle}>
        <div className="center-mode">{this.props.children}</div>
      </div>
    )
  }
}

export default Greybox
