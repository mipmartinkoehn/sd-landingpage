import React from 'react';
import Whitebox from '../components/white-box/white-box.module';
import Greybox from '../components/grey-box/grey-box.module';
import ContactForm from '../components/contact-form/contact-form';
import ContactMap from '../components/contact-map/contact-map';

const Contact = () => (
    <div>
      <Whitebox>
        <h2>Schreiben Sie uns eine Nachricht</h2>
        <ContactForm />
      </Whitebox>
      <Greybox>
        <ContactMap /> 
      </Greybox>
    </div>
  )

export default Contact;
