import React from 'react';
import BlueBox from '../components/blue-box/blue-box';
import WhiteBox from '../components/white-box/white-box.module';
import LinkedButton from '../components/link-button/link-button';

const ContactSuccess = () => (
    <div className="center-mode" style={{textAlign: 'center'}}>
      <WhiteBox>
        <h2>Vielen Dank für Ihre Nachricht.</h2>
        <LinkedButton to="/" maxWidth="600px" bgColor="#B81135" color="#fff">Zurück</LinkedButton> 
      </WhiteBox>

    </div>
  )

export default ContactSuccess;