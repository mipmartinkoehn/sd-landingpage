import React, { Component } from 'react'
import Link from 'gatsby-link'
import styles from './footer-link.module.css'

class FooterLink extends Component {
  render() {
    const { href, label } = this.props

    return (
      <li className={styles.liStyle}>
        <Link className={styles.linkStyle} to={href}>
          {label}
        </Link>
      </li>
    )
  }
}

export default FooterLink
