import React, { Component } from 'react';
import Link from 'gatsby-link';
import Whitebox from '../components/white-box/white-box';
import './contact.css';
import Greybox from '../components/grey-box/grey-box';
import mapScene from '../images/map-ausschnitt.png';
import mapIcon from '../images/hmap-icon.png';
import phoneIcon from '../images/phone-icon.png';
import emailIcon from '../images/email-icon.png';
import pinIcon from '../images/pin.png';

const Contact = () => (
    <div className='contact'>
      <Whitebox>
        <h2>Schreiben Sie uns eine Nachricht</h2>

        <form method="post" action="#">
        <p>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name"/>
      </p>
      <p>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email"/>
      </p>
      <p>
        <label htmlFor="firm">Firma</label>
        <input type="text" name="firm" id="firm"/>
      </p>
      <p>
        <label htmlFor="phone">Telefon</label>
        <input type="text" name="phone" id="phone"/>
      </p>
      <p className="full-width">
        <label htmlFor="message">Ihre Nachricht an uns</label>
        <textarea name="message" id="message" rows="12"></textarea>
      </p>
      <p className="full-width">
        <input type="submit" value="Nachricht absenden" />
      </p>
        </form>
      </Whitebox>
      <Greybox>
        <div className='contact-info'>
          <div className='contact-cell'>
            <div style={{display: 'inline-block', verticalAlign: 'top', minWidth: '40px'}}>
              <img src={mapIcon} style={{height: '30px', marginTop: '8px'}} alt="img"/>
            </div>
            <div style={{display: 'inline-block', marginLeft: '10px'}}>
                <div>mip Consult GmbH</div>
                <div>Alte Jakobstraße 77</div>
                <div>10179 Berlin</div>
            </div>
          </div>

          <div className='contact-cell'>
            <div style={{display: 'inline-block', verticalAlign: 'top', minWidth: '40px'}}>
              <img src={phoneIcon} style={{height: '30px', marginTop: '6px'}} alt="img"/>
            </div>
            <div style={{display: 'inline-block', marginLeft: '10px'}}>
                <div>030 20 88 999 0</div>
            </div>
          </div>

          <div className='contact-cell'>
          <div style={{display: 'inline-block', verticalAlign: 'top', minWidth: '40px'}}>
            <img src={emailIcon} style={{height: '30px', marginTop: '6px'}} alt="img"/>
          </div>
          <div style={{display: 'inline-block', marginLeft: '10px'}}>
              <div>kontakt@mip-consult.de</div>
          </div>
        </div>

        </div>
        <div className='contact-map'>
          <img src={mapScene} style={{margin: '0'}}/>
          <img src={pinIcon} style={{position: 'absolute', top: '110px', right: '170px'}}/>
        </div>
      </Greybox>
    </div>
  )

export default Contact;
