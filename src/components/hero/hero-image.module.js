import React from 'react'
import { withPrefix } from 'gatsby-link'
import styles from './hero-image.module.css'
import DataImage from '../../images/undraw_data_xmfy.svg'
import CodingImage from '../../images/undraw_coding_6mjf.svg'
import PresentationImage from '../../images/undraw_presentation1_tqkp.svg'
import DealImage from '../../images/undraw_business_deal_cpi9.svg'
import ChatImage from '../../images/undraw_chat_1wo5.svg'

class HeroImage extends React.Component {
  // Get correct image based on the location
  getImage(location) {
    let image = null
    // let location = this.props.location;
    if (location.charAt(location.length - 1) !== '/') {
      location += '/'
    }
    switch (location) {
      case withPrefix('/'):
        image = DataImage
        break
      case withPrefix('/software-dev/'):
        image = CodingImage
        break
      case withPrefix('/it-consulting/'):
        image = DealImage
        break
      case withPrefix('/support/'):
        image = PresentationImage
        break
      case withPrefix('/contact/'):
        image = ChatImage
        break
      default:
        image = null
        break
    }
    return image
  }

  render() {
    const { location } = this.props
    return <img className={styles.heroImage} src={this.getImage(location)} />
  }
}

export default HeroImage
