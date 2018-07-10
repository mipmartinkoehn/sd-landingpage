import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby-link'
import NavigationBar from '../components/navigation/navigation-bar.module'
import Hero from '../components/hero/hero.module'
import Footer from '../components/footer/footer'
import './index.css'

function GetHero(props) {
  const location = props.location
  if (location.pathname === withPrefix('/')) {
    return <Hero siteTitle={location.pathname} big={true} />
  }
  return <Hero siteTitle={location.pathname} />
}

const Layout = ({ children, data, location }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <NavigationBar />
    <GetHero location={location}/>
    <div>{children()}</div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
