import React from 'react'

import Bubble from './header-bubble';
import Navigation from './navigation';
import HeaderTitle from './title';
import Bubbles from '../../images/bubbles.png';


class Header extends React.Component {
  render() {
    const siteTitle = this.props.siteTitle;

    const headerStyle = {
      background: `url(${Bubbles}) left bottom, linear-gradient(to right, #00567A, #482E7A ,#AC1332)`,
      height: '100vh',
      backgroundRepeat: 'no-repeat',
      marginBottom: '1.45rem',
      position: 'relative',
      maxHeight: '900px',
      overflow: 'hidden'
    };

    return (
      <div style={headerStyle}>
          <Bubble></Bubble>
          <Navigation></Navigation>
          <HeaderTitle location={siteTitle}></HeaderTitle>
      </div>
    )
  }
}


export default Header
