import React from 'react';
import Whitebox from '../components/white-box/white-box';
import Process from '../images/fotalia_sm_m10.jpg';
import LinkedButton from '../components/link-button/link-button';
import Greybox from '../components/grey-box/grey-box';
import BlueBox from '../components/blue-box/blue-box';

const ITConsulting = () => (
<div>
  <Whitebox>
    <h2>Anforderungsmanagement</h2>
    <p>
      Präzise formulierte Anforderungen bilden die Basis für ein gemeinsames Verständnis über ein zu entwickelndes Softwaresystem zwischen allen beteiligten Parteien.
    </p>
    <p>
      Die definierten Anforderungen sind damit gleichzeitig die Grundlage für Projektmanagement, Risikomanagement, Änderungsmanagement, und Testmanagement inkl. Akzeptanztests
    </p>
    <p>
      Unsere IT-Berater unterstützen den gesamten Prozess des Anforderungsmanagements und bilden die Schnittstelle zwischen Fachabteilung und Entwicklung.
    </p>
    <br />
    <img src= {Process}   style={{
      maxWidth: '80%',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto'}}
    />

    <br />
    <div style={{textAlign: 'center'}}>
      <LinkedButton to="https://mip-consult.de" maxWidth="300px" bgColor="#B81135" color="#fff" external >Mehr erfahren</LinkedButton>
    </div>
  </Whitebox>
  <Greybox>
    <h2>
      IT-Sicherheit
    </h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat imperdiet sed euismod nisi porta lorem mollis. Non enim praesent elementum facilisis leo vel fringilla. Quisque non tellus orci ac auctor. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Amet facilisis magna etiam tempor. Mauris ultrices eros in cursus turpis massa tincidunt. Sit amet cursus sit amet dictum sit amet justo. Erat nam at lectus urna duis convallis. Ultricies tristique nulla aliquet enim tortor. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Ultrices dui sapien eget mi proin. Nisl tincidunt eget nullam non nisi. Vulputate odio ut enim blandit volutpat. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan.
    </p>
  </Greybox>
  <BlueBox>
    <h2>
      Datenschutz
    </h2>
    <p>
      Zweck des Datenschutzrechts ist es, das Grundrecht auf informationelle Selbstbestimmung der Bürger zu gewährleisten. Damit begrenzt der Datenschutz den wirtschaftlichen Betätigungsfreiraum im Bereich der Verarbeitung personenbezogener Daten. Der Datenschutz ist dabei als Rahmenbedingung des Wettbewerbs von allen Marktteilnehmern gleichermaßen zu beachten.
    </p>
    <p>
      Insofern müssen Unternehmen unterschiedliche Gesetze berücksichtigen und sinnvoll ins Tagesgeschäft integrieren. Aufgrund der eigenen Strukturen fällt es Unternehmen oft schwer, den Datenschutz innerhalb der gesamten Organisation durchgängig und widerspruchsfrei zu etablieren.
    </p>
    <div style={{textAlign: 'center'}}>
      <LinkedButton to="https://sofortdatenschutz.de" maxWidth="300px" bgColor="#B81135" color="#fff" external >Mehr erfahren</LinkedButton>
    </div>
  </BlueBox>
</div>
)

export default ITConsulting;
