import React from 'react'

import Bubble from './header-bubble';
import Navigation from './navigation';
import HeaderTitle from './title';
import './header.css';


class Header extends React.Component {
  render() {
    const siteTitle = this.props.siteTitle
    return (
      <div className='header'>
          <Bubble></Bubble>
          <Navigation></Navigation>
          <HeaderTitle></HeaderTitle>
      </div>
    )
  }
}


export default Header
