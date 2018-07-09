import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation-list-item.module.css'

class NavigationListItem extends React.Component {
  render() {
    const { dark, path, title } = this.props

    return (
      <li className={styles.liStyle}>
        <Link
          className={dark ? styles.linkStyleDark : styles.linkStyle}
          to={path}
        >
          {title}
        </Link>
      </li>
    )
  }
}

export default NavigationListItem
