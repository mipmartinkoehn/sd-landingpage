import React from 'react';
import DynamicHeader from './dynamic-header';
import Link from 'gatsby-link'

class Navigation extends React.Component {
    render() {
        
        return (
            <DynamicHeader hasEffect={true} effectDuration={600} useHeadersDifference={true}>
                <div style={{height: "100px", width: "100%", position: "fixed", top: 0, zIndex: 1039, textAlign: "center",}}>
                <div style={{paddingTop: "15px",}}>Header Component 1 - Bigger Component</div>
                </div>
                <div style={{height: "50px", backgroundColor: "#fff", width: "100%", position: "fixed", top: 0, zIndex: 1039, textAlign: "center", }}>
                <div style={{paddingTop: "15px",}}>Header Component 2 - Sticky Component</div>
                </div>
            </DynamicHeader>
        );
    };
}

export default Navigation;