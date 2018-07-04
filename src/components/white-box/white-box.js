import React, { Component } from 'react';

class Whitebox extends Component {
    render() {
        return (
            <div style={{padding: '4rem 0'}}>
                <div className='center-mode' >
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Whitebox;