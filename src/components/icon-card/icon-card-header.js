import React, { Component } from 'react';

class IconCardHeader extends Component {
    
    render() {

        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default IconCardHeader;