import React, { Component } from 'react';
import Link from 'gatsby-link';
import mipLogo from '../../images/mip-logo_weiß.png';
import './footer.css';

class Footer extends Component {
    render() {
      
        return (
            <div style={{ backgroundColor: '#000', height: '100px'}}>
                <div
                style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '0px 1.0875rem 1.45rem',
                paddingTop: 0,
                }}
            >
                    <img src={mipLogo} className='img-style'/>
                    <div style={{float: 'right', marginTop: '2.2rem'}}>
                        <ul className='ul-style'>
                            <li className='li-style'><Link className='link-style' to="/page-2/">Impressum</Link></li>
                            <li className='li-style'><Link className='link-style' to="/page-2/">Datenschutz</Link></li>
                            <li className='li-style'><Link className='link-style' to="/page-2/">Kontakt</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;