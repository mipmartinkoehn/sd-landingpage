import React, { Component } from 'react';

class Whitebox extends Component {
    render() {
        return (
            <div
                style={{
                    margin: '0 auto',
                    maxWidth: 960,
                    padding: '1rem 1.0875rem 1.45rem',
                    paddingTop: 0,
                }}
                >
                {this.props.children}
            </div>
        )
    }
}

export default Whitebox;