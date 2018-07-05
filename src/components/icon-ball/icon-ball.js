import React, { Component } from 'react';

class IconBall extends Component {
    render() {
        const { bgColor, color, imgSrc} = this.props
        return(
            <div style={{borderRadius:'1000rem', backgroundColor: bgColor, height:'12.5rem', width: '12.5rem', textAlign: 'center'}}>
            <div style={{padding: '2.5rem 0 0', }}>
                <img src={imgSrc}/>
            </div>
            <div style={{marginTop: '-1rem', color: color}}>
             {this.props.children}
            </div>
            </div>
        )
    }
}

export default IconBall;

