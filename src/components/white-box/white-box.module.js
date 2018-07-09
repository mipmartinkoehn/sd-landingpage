import React, { Component } from 'react'
import styles from './white-box.module.css'

class Whitebox extends Component {
  render() {
    return (
      <div className={styles.whiteBox}>
        <div className="center-mode">{this.props.children}</div>
      </div>
    )
  }
}

export default Whitebox
