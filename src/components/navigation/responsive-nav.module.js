import React from 'react'
import Link from 'gatsby-link'
import NavigationList from './navigation-list.module'
import styles from './responsive-nav.module.css'
import burgerIcon from '../../images/navicon.svg'
import burgerIconWhite from '../../images/navicon_white.svg'
import closeIcon from '../../images/close.svg'

function GetBurgerIcon(dark) {
  if (!dark) {
    return burgerIconWhite
  }
  return burgerIcon
}

class ResponsiveNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = { menuOpen: false }
    this.openMenu = this.openMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  openMenu(e) {
    console.log('open')
    e.preventDefault()
    if (!this.state.menuOpen) {
      this.setState({ menuOpen: true })
    }
  }

  closeMenu(e) {
    console.log('close')
    e.preventDefault()
    if (this.state.menuOpen) {
      this.setState({ menuOpen: false })
    }
  }

  render() {
    const { className, dark } = this.props
    return (
      <div className={className}>
        <Link
          to="#"
          className={styles.respLink}
          style={{ backgroundImage: `url(${GetBurgerIcon(dark)})` }}
          onClick={this.openMenu}
        />
        <div
          className={styles.respMenuList}
          style={this.state.menuOpen ? { display: 'block' } : {}}
        >
          <Link
            to="#"
            className={styles.closeIcon}
            style={{ backgroundImage: `url(${closeIcon})` }}
            onClick={this.closeMenu}
          />
          <NavigationList dark />
        </div>
      </div>
    )
  }
}

export default ResponsiveNav
