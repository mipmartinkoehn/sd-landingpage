import React from 'react'
import { withPrefix } from 'gatsby-link'
import styles from './hero-title.module.css'

class HeroTitle extends React.Component {
  getTitle() {
    let title = ''
    switch (this.props.location) {
      case withPrefix('/'):
        title =
          'INDIVIDUALSOFTWARE: \nSMARTE KONZEPTE. \nZUVERLÄSSIGE UMSETZUNG!'
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
      case withPrefix('/data-protection/'):
        title = 'Datenschutz'
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

  render() {
    return (
      <div className={styles.centerStyle}>
        <div className={styles.flexStyle}>
          <h1 style={{ margin: 0 }}>{this.getTitle()}</h1>
        </div>
      </div>
    )
  }
}

export default HeroTitle
