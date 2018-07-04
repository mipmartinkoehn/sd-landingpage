import React, { Component } from 'react';

class CardFlexGroup extends Component {

    render() {
        const cardFlex = {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around'

        }
        return (
            <div style={cardFlex}>
                {this.props.children}
            </div>
        )
    }
}

export default CardFlexGroup;