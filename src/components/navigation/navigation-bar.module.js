import React from 'react'
import DynamicHeader from './dynamic-header'

import msLight from '../../images/mip-software-logo_weiß.png'
import msDark from '../../images/mip-software-logo.png'
import NavigationList from './navigation-list.module'
import styles from './navigation-bar.module.css'

class NavigationBar extends React.Component {
  render() {
    return (
      <DynamicHeader hasEffect effectDuration={100} useHeadersDifference>
        <div className={styles.lightStyle}>
          <NavigationList
            imgSrc={msLight}
          />
        </div>
        <div className={styles.darkStyle}>
          <NavigationList
            imgSrc={msDark}
            dark
          />
        </div>
      </DynamicHeader>
    )
  }
}

export default NavigationBar
