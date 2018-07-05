import React from 'react'
import BlueBox from '../components/blue-box/blue-box';
import Whitebox from '../components/white-box/white-box';
import Greybox from '../components/grey-box/grey-box';
import IconCard from '../components/icon-card/icon-card';
import IconCardHeader from '../components/icon-card/icon-card-header';
import IconCardContent from '../components/icon-card/icon-card-content';
import CardFlexGroup from '../components/icon-card/icon-card-flex';
import ConceptIcon from '../images/konzept-icon.png';
import DevelopIcon from '../images/raketen-icon.png';
import SupportIcon from '../images/headset-icon.png';
import LinkedButton from '../components/link-button/link-button';

const IndexPage = () => (

<div style={{textAlign: 'center'}}>
  <Whitebox>
    <h2>Software - Angepasst und inovativ</h2>
    <p>Individualsoftware kommt überall dort zum Einsatz, wo Standardlösungen die individuelle Problemstellung verfehlt. 
        Die Realisierung moderner Weblösungen gehört genauso zu unserer Engagement, wie die konstruktive Zusammenarbeit mit unseren Kundinnen und Kunden. 
        Dabei begleiten wir Sie von der ersten Idee über die Konzeption bis hin zur Umsetzung. Auch danach stehen wir an Ihrer Seite und bieten Support und Schulungen.
    </p>

    <br />
    <CardFlexGroup>
      <IconCard imgSrc={ConceptIcon}>
        <IconCardHeader>
          <h4>Konzeption</h4>
        </IconCardHeader>
        <IconCardContent>
          <p>Gute Software beginnt mit einem durchdachten Konzept. In der Konzeptionsphase arbeiten wir eng mit dem Kunden zusammen für eine optimale Lösung.</p>
        </IconCardContent>
      </IconCard>
      <IconCard imgSrc={DevelopIcon}>
        <IconCardHeader>
          <h4>Softwareentwicklung</h4>
        </IconCardHeader>
        <IconCardContent>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat imperdiet sed euismod nisi porta lorem mollis</p>
        </IconCardContent>
      </IconCard>
      <IconCard imgSrc={SupportIcon}>
        <IconCardHeader>
          <h4>Support und Wartung</h4>
        </IconCardHeader>
        <IconCardContent>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat imperdiet sed euismod nisi porta lorem mollis</p>
        </IconCardContent>
      </IconCard>
    </CardFlexGroup>
    <br />
    <br />
  </Whitebox>
  <Greybox>
    <h2>We happy?</h2>
    <p>You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man. </p>
    <p>The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee. </p>
  </Greybox>
  <BlueBox>
    <br />
    <h2>Wir freuen uns auf Ihre Kontaktanfrage</h2>
    <LinkedButton to="/contact/" maxWidth="300px" bgColor="#B81135" color="#fff">Anfrage stellen</LinkedButton>
    <br />
  </BlueBox>
  <Whitebox>
    <h2>Uuummmm, this is a tasty burger!</h2>
    <p>The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee. </p>
  </Whitebox>
</div>
)

export default IndexPage
