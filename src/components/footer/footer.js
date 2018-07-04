import React, { Component } from 'react';
import Link from 'gatsby-link';
import mipLogo from '../../images/mip-logo_weiß.png';

class Footer extends Component {
    render() {

        const ulStyle = {
            listStyleType: 'none',
            margin: '0 auto'
        };
        
        const liStyle = {
            display: 'inline',
            padding: '10px',
        };
        
        const imgStyle = { 
            height: '55px',
            marginTop: '20px',
            marginBottom: '-15px',
        };
        
        const linkStyle = {
            textDecoration: 'none',
            color: '#AC1332',
            fontWeight: '600',
            fontSize: '1.5rem',
        };

        return (
            <div style={{ backgroundColor: '#000', height: '100px'}}>
                <div className='center-mode' >
                    <img src={mipLogo} style={imgStyle} />
                    <div style={{float: 'right', marginTop: '2.2rem'}}>
                        <ul style={ulStyle}>
                            <li style={liStyle}><Link style={linkStyle} to="/page-2/">Impressum</Link></li>
                            <li style={liStyle}><Link style={linkStyle} to="/page-2/">Datenschutz</Link></li>
                            <li style={liStyle}><Link style={linkStyle} to="/page-2/">Kontakt</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;