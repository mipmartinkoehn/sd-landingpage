import React from 'react'

import Bubble from './header-bubble';
import Navigation from './navigation';
import HeaderTitle from './title';


class Header extends React.Component {
  render() {
    const siteTitle = this.props.siteTitle
    return (
      <div
        style={{
          background: 'url(../assets/images/bubbles.png) left bottom, linear-gradient(to right, #00567A, #482E7A ,#AC1332)',
          height: '350px',
          backgroundRepeat: 'no-repeat',
          marginBottom: '1.45rem',
        }}
        >
        <div>
          <Bubble></Bubble>
        </div>
          <Navigation></Navigation>
          <HeaderTitle></HeaderTitle>
      </div>
    )
  }
}


export default Header
