import React from 'react';
import Whitebox from '../components/white-box/white-box.module';
import Process from '../images/fotalia_sm_m10.jpg';
import LinkButton from '../components/link-button/link-button.module';
import Greybox from '../components/grey-box/grey-box.module';
import BlueBox from '../components/blue-box/blue-box.module';

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
      <LinkButton to="https://www.mip-consult.de/leistungen/it-loesungen/anforderungsmanagement/" maxWidth="400px" bgColor="#B81135" color="#fff" external >Mehr zu Anforderungsmanagement erfahren</LinkButton>
    </div>
  </Whitebox>
  <Greybox>
    <h2>
      IT-Sicherheit
    </h2>
    <p>
      Wir stehen Ihnen als IT Sicherheitsbeauftragter zur Verfügung. Durch unsere branchenübergreifenden Erfahrungen in den Bereichen IT Sicherheit und IT Infrastruktur verbessern wir Ihre Informationssicherheit.  Bei uns ist der Leistungsumfang individuell auf Ihre Bedürfnisse zugeschnitten, sodass Sie eine optimale Kostenkontrolle haben.
    </p>
    <p>Wir unterstützen Sie bei:</p>
    <ul>
      <li>Informationssicherheits-Checkup</li>
      <li>Beratung für Geschäftsführung und Sicherheitsverantwortliche</li>
      <li>Projektunterstützung zur Einführung eines Informationssicherheits-Managementsystems (ISMS)</li>
      <li>u.a.</li>
    </ul>
    <div style={{textAlign: 'center'}}>
      <LinkButton to="https://www.mip-consult.de/leistungen/it-loesungen/it-beratung/" maxWidth="400px" bgColor="#B81135" color="#fff" external >Mehr zu IT-Sicherheit erfahren</LinkButton>
    </div>
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
      <LinkButton to="https://www.mip-consult.de/leistungen/compliance-datenschutz/datenschutz/" maxWidth="400px" bgColor="#B81135" color="#fff" external >Mehr zu Datenschutz erfahren</LinkButton>
    </div>
  </BlueBox>
</div>
)

export default ITConsulting;
