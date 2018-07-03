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
                    <img src={imgSrc} style={logoStyle}/>
                    <ul style={ulStyle}>
                        <li style={liStyle}><Link style={linkStyle} to="/page-2/">Kontakt</Link></li>
                        <li style={liStyle}><Link style={linkStyle} to="/page-2/">Projekte</Link></li>
                        <li style={liStyle}><Link style={linkStyle} to="/page-2/">Support und Schulungen</Link></li>
                        <li style={liStyle}><Link style={linkStyle} to="/page-2/">IT-Beratung</Link></li>
                        <li style={liStyle}><Link style={linkStyle} to="/page-2/">Softwareentwicklung</Link></li>
                    </ul>
                </div>
            </div>
        );
    };
};

export default NavigationItems;