import React from 'react';
import Link from 'gatsby-link'

class HeaderTitle extends React.Component {
    render() {
        const siteTitle = this.props.siteTitle
        return (
            <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '7.45rem 1.0875rem',
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              {siteTitle}
            </Link>
          </h1>
        </div>
        )
    }
};

export default HeaderTitle;