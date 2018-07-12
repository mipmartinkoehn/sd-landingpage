import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby-link'
import NavigationBar from '../components/navigation/navigation-bar.module'
import Hero from '../components/hero/hero.module'
import Footer from '../components/footer/footer.module'
import favicon from '../images/favicon/favicon.ico';
import favicon196x196 from '../images/favicon/favicon-196x196.png';
import favicon96x96 from '../images/favicon/favicon-96x96.png';
import favicon32x32 from '../images/favicon/favicon-32x32.png';
import favicon16x16 from '../images/favicon/favicon-16x16.png';
import favicon128x128 from '../images/favicon/favicon-128.png';
import appleTouchIcon57x57 from '../images/favicon/apple-touch-icon-57x57.png';
import appleTouchIcon114x114 from '../images/favicon/apple-touch-icon-114x114.png';
import appleTouchIcon144x144 from '../images/favicon/apple-touch-icon-144x144.png';
import appleTouchIcon72x72 from '../images/favicon/apple-touch-icon-72x72.png';
import appleTouchIcon60x60 from '../images/favicon/apple-touch-icon-60x60.png';
import appleTouchIcon120x120 from '../images/favicon/apple-touch-icon-120x120.png';
import appleTouchIcon76x76 from '../images/favicon/apple-touch-icon-76x76.png';
import appleTouchIcon152x152 from '../images/favicon/apple-touch-icon-152x152.png';
import mstile144x144 from '../images/favicon/mstile-144x144.png'
import mstile70x70 from '../images/favicon/mstile-70x70.png';
import mstile150x150 from '../images/favicon/mstile-150x150.png';
import mstile310x310 from '../images/favicon/mstile-310x310.png';
import mstile310x150 from '../images/favicon/mstile-310x150.png';
import './index.css'

function GetHero(props) {
  const location = props.location
  if (location.pathname === withPrefix('/')) {
    return <Hero siteTitle={location.pathname} big />
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
        { name: 'msapplication-TileColor', content: '#FFFFFF'},
        { name: 'msapplication-TileImage', content: `${mstile144x144}`},
        { name: 'msapplication-square70x70logo', content: `${mstile70x70}` },
        { name: 'msapplication-square150x150logo', content: `${mstile150x150}` },
        { name: 'msapplication-square310x310logo', content: `${mstile310x310}` },
        { name: 'msapplication-wide310x150logo', content: `${mstile310x150}` },
      ]}
      link={[
        { rel: 'apple-touch-icon-precomposed', type: 'image/png', sizes: '57x57', href: `${appleTouchIcon57x57}` },
        { rel: 'apple-touch-icon-precomposed', type: 'image/png', sizes: '114x114', href: `${appleTouchIcon114x114}` },
        { rel: 'apple-touch-icon-precomposed', type: 'image/png', sizes: '72x72', href: `${appleTouchIcon72x72}` },
        { rel: 'apple-touch-icon-precomposed', type: 'image/png', sizes: '144x144', href: `${appleTouchIcon144x144}` },
        { rel: 'apple-touch-icon-precomposed', type: 'image/png', sizes: '60x60', href: `${appleTouchIcon60x60}` },
        { rel: 'apple-touch-icon-precomposed', type: 'image/png', sizes: '120x120', href: `${appleTouchIcon120x120}` },
        { rel: 'apple-touch-icon-precomposed', type: 'image/png', sizes: '76x76', href: `${appleTouchIcon76x76}` },
        { rel: 'apple-touch-icon-precomposed', type: 'image/png', sizes: '152x152', href: `${appleTouchIcon152x152}` },
        { rel: 'icon', type: 'image/png', sizes: '196x196', href: `${favicon196x196}` },
        { rel: 'icon', type: 'image/png', sizes: '96x96',href: `${favicon96x96}` },
        { rel: 'icon', type: 'image/png', sizes: '32x32',href: `${favicon32x32}` },
        { rel: 'icon', type: 'image/png', sizes: '16x16',href: `${favicon16x16}` },
        { rel: 'icon', type: 'image/png', sizes: '128x128',href: `${favicon128x128}` },
        { rel: 'icon', type: 'image/png',href: `${favicon}` },
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
