import React, { Component } from 'react'

class Greybox extends Component {
    render() {
        const greyBoxStyle = {
            backgroundColor: '#F5F5F6',
            padding: '4rem 0',
            position: 'relative',
            width: '100%!important'
        }


        return (
            <div style={greyBoxStyle} >
                <div className='center-mode'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Greybox;