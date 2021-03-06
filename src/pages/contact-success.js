import React from 'react';
import WhiteBox from '../components/white-box/white-box.module';
import LinkButton from '../components/link-button/link-button.module';

const ContactSuccess = () => (
    <div className="center-mode" style={{textAlign: 'center'}}>
      <WhiteBox>
        <h2>Vielen Dank für Ihre Nachricht.</h2>
        <LinkButton to="/" maxWidth="600px" bgColor="#B81135" color="#fff">Zurück</LinkButton> 
      </WhiteBox>

    </div>
  )

export default ContactSuccess;