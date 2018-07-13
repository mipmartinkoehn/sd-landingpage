import React from 'react'
import Link from 'gatsby-link'
import msLight from '../../images/whitemip-software-logo.svg'
import msDark from '../../images/mip-software-logo.svg'
import NavigationList from './navigation-list.module'
import ResponsiveNav from './responsive-nav.module'
import styles from './navigation-bar.module.css'

let lastScrollY = 0
let ticking = false

class NavigationBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { imgSrc: msLight, isDark: false }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  nav = React.createRef()

  handleScroll = () => {
    lastScrollY = window.scrollY

    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (lastScrollY > window.innerHeight * 0.08) {
          this.nav.current.className = [styles.darkStyle, styles.header].join(
            ' '
          )
          this.setState({
            imgSrc: msDark,
            isDark: true,
          })
        } else {
          this.nav.current.className = styles.header
          this.setState({
            imgSrc: msLight,
            isDark: false,
          })
        }
        ticking = false
      })

      ticking = true
    }
  }

  render() {
    return (
      <div ref={this.nav} className={styles.header}>
        <Link
          to="/"
          className={styles.logoStyle}
          style={{ backgroundImage: `url(${this.state.imgSrc})` }}
        />
        <NavigationList dark={this.state.isDark} className={styles.nav} />
        <ResponsiveNav dark={this.state.isDark} className={styles.respNav} />
      </div>
    )
  }
}

export default NavigationBar
