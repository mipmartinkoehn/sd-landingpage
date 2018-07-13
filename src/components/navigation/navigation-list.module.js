import React from 'react'
import NavigationListItem from './navigation-list-item.module'
import styles from './navigation-list.module.css'

class NavigationList extends React.Component {
  render() {
    const { dark } = this.props
    const menuEntries = [
      { title: 'Softwareentwicklung', path: '/software-dev/' },
      { title: 'Support und Schulungen', path: '/support/' },
      { title: 'Projekte', path: '/projects/' },
      { title: 'IT-Beratung', path: '/it-consulting/' },
      { title: 'Kontakt', path: '/contact/' },
    ]
    const listItems = menuEntries.map((navItem, i) => (
      <NavigationListItem
        key={i}
        dark={dark}
        path={navItem.path}
        title={navItem.title}
      />
    ))

    return (
      <nav>
        <ul className={styles.ulStyle}>{listItems}</ul>
      </nav>
    )
  }
}

export default NavigationList
