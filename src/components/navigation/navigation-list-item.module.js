import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation-list-item.module.css'

function GetLinkStyle(dark) {
  if (!dark) {
    return styles.linkStyle
  } else {
    return [styles.linkStyleDark, styles.linkStyle].join(' ')
  }
}

class NavigationListItem extends React.Component {
  render() {
    const { dark, path, title } = this.props

    return (
      <li className={styles.liStyle}>
        <Link className={GetLinkStyle(dark)} to={path}>
          {title}
        </Link>
      </li>
    )
  }
}

export default NavigationListItem
