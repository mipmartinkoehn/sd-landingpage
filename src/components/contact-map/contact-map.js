import React, { Component } from 'react';
import mapIcon from '../../images/hmap-icon.png';
import phoneIcon from '../../images/phone-icon.png';
import emailIcon from '../../images/email-icon.png';

class ContactMap extends Component {

  render() {

    const contactInfoStyle = {
      display: 'inline-block',
      float: 'left',
      width: '25%',
      fontSize: '0.8rem'
    };

    const contactCellStyle = {
      marginBottom: '30px'
    };

    const contactMapStyle = {
      position: 'relative'
    };

    return (
      <div>
        <div style={contactInfoStyle}>
          <div style={contactCellStyle}>
            <div style={{ display: 'inline-block', verticalAlign: 'top', minWidth: '40px' }}>
              <img src={mapIcon} style={{ height: '30px', marginTop: '8px' }} alt="img" />
            </div>
            <div style={{ display: 'inline-block', marginLeft: '10px' }}>
              <div>mip Consult GmbH</div>
              <div>Alte Jakobstraße 77</div>
              <div>10179 Berlin</div>
            </div>
          </div>

          <div style={contactCellStyle}>
            <div style={{ display: 'inline-block', verticalAlign: 'top', minWidth: '40px' }}>
              <img src={phoneIcon} style={{ height: '30px', marginTop: '6px' }} alt="img" />
            </div>
            <div style={{ display: 'inline-block', marginLeft: '10px' }}>
              <div>030 20 88 999 0</div>
            </div>
          </div>

          <div style={contactCellStyle}>
            <div style={{ display: 'inline-block', verticalAlign: 'top', minWidth: '40px' }}>
              <img src={emailIcon} style={{ height: '30px', marginTop: '6px' }} alt="img" />
            </div>
            <div style={{ display: 'inline-block', marginLeft: '10px' }}>
              <div>kontakt@mip-consult.de</div>
            </div>
          </div>
        </div>
        <div style={contactMapStyle}>
          <img src='https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyCeujcj2YqDjxkUs7KQHGr3go1k6gn4lqo&center=52.51051712072958,13.408659100000023&zoom=16&size=780x420&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0xf5f5f5&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x616161&style=element:labels.text.stroke%7Ccolor:0xf5f5f5&style=feature:administrative%7Celement:geometry%7Cvisibility:off&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Cvisibility:off&style=feature:poi%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:road%7Celement:geometry%7Ccolor:0xffffff&style=feature:road%7Celement:labels.icon%7Cvisibility:off&style=feature:road.arterial%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:road.highway%7Celement:geometry%7Ccolor:0xdadada&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:transit%7Cvisibility:off&style=feature:transit.line%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:transit.station%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:water%7Celement:geometry%7Ccolor:0xc9c9c9&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&size=480x360&markers=size:mid%7Ccolor:0xb81135%7C%7C52.510620,%2013.408446&signature=oXyZu9Y3piCrZNG5m_bO5pY2pEo=' style={{ margin: '0' }} />
        </div>
      </div>
    )
  }
}

export default ContactMap;