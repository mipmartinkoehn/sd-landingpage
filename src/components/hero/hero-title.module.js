import React from 'react'
import { withPrefix } from 'gatsby-link'
import styles from './hero-title.module.css'

class HeroTitle extends React.Component {
  getTitle(location) {
    let title = ''
    // let location = this.props.location;
    if (location.charAt(location.length - 1) !== '/') {
      location += '/'
    }
    switch (location) {
      case withPrefix('/'):
        title = 'INDIVIDUALSOFTWARE:'
        break
      case withPrefix('/software-dev/'):
        title = 'Softwareentwicklung'
        break
      case withPrefix('/it-consulting/'):
        title = 'IT-Beratung'
        break
      case withPrefix('/support/'):
        title = 'Support und Schulungen'
        break
      case withPrefix('/projects/'):
        title = 'Projekte'
        break
      case withPrefix('/contact/'):
        title = 'Kontakt'
        break
      case withPrefix('/callback/'):
        title = 'Rückrufwunsch'
        break
      case withPrefix('/data-protection/'):
        title = 'Datenschutzerklärung'
        break
      case withPrefix('/impressum/'):
        title = 'Impressum'
        break
      case withPrefix('/contact-success/'):
        title = 'Danke'
        break
      default:
        title = (
          <section className="error-container">
            <span>4</span>
            <span>
              <span className="screen-reader-text">0</span>
            </span>
            <span>4</span>
          </section>
        )
        break
    }
    return title
  }

  getSubTitle(location) {
    let title = ''
    // let location = this.props.location;
    if (location.charAt(location.length - 1) !== '/') {
      location += '/'
    }
    switch (location) {
      case withPrefix('/'):
        title = 'MARKTVORTEIL IN DER DIGITALEN TRANSFORMATION'
        break
      case withPrefix('/software-dev/'):
        title = 'Moderne Ansätze für individuelle Lösungen'
        break
      case withPrefix('/support/'):
        title = 'Schnelle Unterstützung auch nach der Software Einführung'
        break
      case withPrefix('/it-consulting/'):
        title = 'Finden Sie die richtige Lösung in einem unserer Workshops'
        break
      default:
        title = ''
        break
    }
    return title
  }

  render() {
    const { location } = this.props
    return (
      <div className={styles.heroTextContainer}>
        <h1 className={styles.title}>{this.getTitle(location)}</h1>
        <h2 className={styles.subTitle}>{this.getSubTitle(location)}</h2>
      </div>
    )
  }
}

export default HeroTitle
