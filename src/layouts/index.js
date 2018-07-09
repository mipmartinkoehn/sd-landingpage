import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import NavigationBar from '../components/navigation/navigation-bar.module';
import Hero from '../components/hero/hero.module';
import Footer from '../components/footer/footer';
import './index.css';

const Layout = ({ children, data, location }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <NavigationBar/>
    <Hero siteTitle={location.pathname} />
    <div>
      {children()}
    </div>
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
