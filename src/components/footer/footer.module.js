import React, { Component } from 'react'
import mipLogo from '../../images/mip-logo_weiß.png'
import styles from './footer.module.css'
import FooterLink from './footer-link.module';

class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <div className="center-mode">
          <img src={mipLogo} className={styles.imgStyle} />
          <div style={{ float: 'right', marginTop: '2.2rem' }}>
            <ul className={styles.ulStyle}>
              <FooterLink href="/impressum/" label="Impressum" />
              <FooterLink href="/data-protection/" label="Datenschutzerklärung" />
              <FooterLink href="/contact/" label="Kontakt" />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
