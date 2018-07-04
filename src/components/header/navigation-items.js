import React from 'react';
import Link from 'gatsby-link'

class NavigationItems extends React.Component {

    render() {
        const {imgSrc, logoStyle, ulStyle, liStyle, linkStyle } = this.props;

        const activeStyle = {
            borderBottom: '4px solid #00567a!important'
        }
        return (
            <div style={{paddingTop: "15px"}}>
                <div className='center-mode' >
                    <Link to="/">
                        <img src={imgSrc} style={logoStyle}/>
                    </Link>
                    <ul style={ulStyle}>
                        <li style={liStyle}><Link activeStyle={activeStyle} style={linkStyle} to="/contact/">Kontakt</Link></li>
                        <li style={liStyle}><Link activeStyle={activeStyle} style={linkStyle} to="/projects/">Projekte</Link></li>
                        <li style={liStyle}><Link activeStyle={activeStyle} style={linkStyle} to="/support/">Support und Schulungen</Link></li>
                        <li style={liStyle}><Link activeStyle={activeStyle} style={linkStyle} to="/it-consulting/">IT-Beratung</Link></li>
                        <li style={liStyle}><Link activeStyle={activeStyle} style={linkStyle} to="/software-dev/">Softwareentwicklung</Link></li>
                    </ul>
                </div>
            </div>
        );
    };
};

export default NavigationItems;