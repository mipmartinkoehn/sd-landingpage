import React from 'react';
import DynamicHeader from './dynamic-header';


import msLight from '../mip-software-logo_weiß.png';
import msDark from '../mip-software-logo.png';
import NavigationItems from './navigation-items';

class Navigation extends React.Component {
    render() {
        const ulStyle = {
            listStyleType: 'none',
            margin: 0,
      
        };

        const liStyle = {
            display: 'inline',
            padding: 10,
            float: 'right'
        };

        const linkStyleLight = {
            color: '#fff',
            textDecoration: 'none'
        }

        const logoStyleLight = {
            float:'left',
            height: '40px'
        }

        const linkStyleDark = {
            color: '#000',
            textDecoration: 'none'
        }

        const logoStyleDark = {
            float:'left',
            height: '40px'
        }


        return (
            <DynamicHeader hasEffect={true} effectDuration={600} useHeadersDifference={true}>
                <div style={{height: "100px", width: "100%", position: "fixed", top: 0, zIndex: 1039, textAlign: "center",}}>
                    <NavigationItems 
                        imgSrc={msLight}
                        logoStyle={logoStyleLight}
                        ulStyle={ulStyle}
                        liStyle={liStyle}
                        linkStyle={linkStyleLight}></NavigationItems>
                </div>
                <div style={{height: "75px", backgroundColor: "#fff", width: "100%", position: "fixed", top: 0, zIndex: 1039, textAlign: "center", WebkitBoxShadow: '1px 1px 5px 0px rgba(50, 50, 50, 0.75)',
                MozBoxShadow: '1px 1px 5px 0px rgba(50, 50, 50, 0.75)',
                BoxShadow: '1px 1px 5px 0px rgba(50, 50, 50, 0.75)'}}>
                <NavigationItems 
                        imgSrc={msDark}
                        logoStyle={logoStyleDark}
                        ulStyle={ulStyle}
                        liStyle={liStyle}
                        linkStyle={linkStyleDark}></NavigationItems>
                </div>
            </DynamicHeader>
        );
    };
}

export default Navigation;