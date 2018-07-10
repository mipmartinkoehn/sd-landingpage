import React from 'react';
import Whitebox from '../components/white-box/white-box.module';
import Greybox from '../components/grey-box/grey-box.module';
import ContactMap from '../components/contact-map/contact-map';
import CallbackForm from '../components/callback-form/callback-form';

const Callback = () => (
    <div>
      <Whitebox>
        <h2>Sie haben weitere fregen? Wir rufen Sie gerne zurück</h2>
        <CallbackForm />
      </Whitebox>
      <Greybox>
        <ContactMap /> 
      </Greybox>
    </div>
  )

export default Callback;
