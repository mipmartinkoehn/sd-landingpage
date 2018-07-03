import React from 'react';
import Link from 'gatsby-link'

class NavigationItems extends React.Component {

    render() {
        const {imgSrc, logoStyle, ulStyle, liStyle, linkStyle } = this.props;

        return (
            <div style={{paddingTop: "15px"}}>
                <div style={{
                    margin: '0 auto',
                    maxWidth: 960,
                    padding: '0px 1.0875rem 1.45rem',
                    paddingTop: 0,
                    }}>
                    <Link to="/">
                        <img src={imgSrc} style={logoStyle}/>
                    </Link>
                    <ul style={ulStyle}>
                        <li style={liStyle}><Link activeClassName='active' style={linkStyle} to="/contact/">Kontakt</Link></li>
                        <li style={liStyle}><Link activeClassName='active' style={linkStyle} to="/projects/">Projekte</Link></li>
                        <li style={liStyle}><Link activeClassName='active' style={linkStyle} to="/support/">Support und Schulungen</Link></li>
                        <li style={liStyle}><Link activeClassName='active' style={linkStyle} to="/it-consulting/">IT-Beratung</Link></li>
                        <li style={liStyle}><Link activeClassName='active' style={linkStyle} to="/software-dev/">Softwareentwicklung</Link></li>
                    </ul>
                </div>
            </div>
        );
    };
};

export default NavigationItems;