import React from 'react'
import BlueBox from '../components/blue-box/blue-box.module'
import Whitebox from '../components/white-box/white-box.module'
import Greybox from '../components/grey-box/grey-box.module'
import IconCard from '../components/icon-card/icon-card.module'
import IconCardHeader from '../components/icon-card/icon-card-header'
import IconCardContent from '../components/icon-card/icon-card-content.module'
import CardFlexGroup from '../components/icon-card/icon-card-flex'
import ConceptIcon from '../images/konzept-icon.png'
import DevelopIcon from '../images/raketen-icon.png'
import SupportIcon from '../images/headset-icon.png'
import LinkButton from '../components/link-button/link-button.module'

const IndexPage = () => (
  <div style={{ textAlign: 'center' }}>
    <Whitebox>
      <h2>Software - Angepasst und innovativ</h2>
      <p>
        Individualsoftware kommt überall dort zum Einsatz, wo Standardlösungen
        die individuelle Problemstellung verfehlt. Die Realisierung moderner
        Weblösungen gehört genauso zu unserer Engagement, wie die konstruktive
        Zusammenarbeit mit unseren Kundinnen und Kunden. Dabei begleiten wir Sie
        von der ersten Idee über die Konzeption bis hin zur Umsetzung. Auch nach der Umsetzung stehen wir an Ihrer Seite und bieten Ihnen und Ihren Mitarbeitern maßgeschneiderten Support und Schulungen.
      </p>

      <br />
      <CardFlexGroup>
        <IconCard imgSrc={ConceptIcon}>
          <IconCardHeader>
            <h4>Konzeption</h4>
          </IconCardHeader>
          <IconCardContent>
            <p>
              Gute Software beginnt mit einem durchdachten Konzept. Von der
              ersten Idee arbeiten wir eng mit Ihnen zusammen für eine optimale
              Lösung.
            </p>
          </IconCardContent>
        </IconCard>
        <IconCard imgSrc={DevelopIcon}>
          <IconCardHeader>
            <h4>Softwareentwicklung</h4>
          </IconCardHeader>
          <IconCardContent>
            <p>
              Wir entwickeln mit aktuellen Technologien damit wir Ihnen
              zuverlässige und wartbare Produkte zur Verfügung stellen können.
            </p>
          </IconCardContent>
        </IconCard>
        <IconCard imgSrc={SupportIcon}>
          <IconCardHeader>
            <h4>Support und Wartung</h4>
          </IconCardHeader>
          <IconCardContent>
            <p>
              Auch eine individuell entwickelte Software bedarf der Pflege und
              Weiterentwicklung. Wir sind Ihr Partner!
            </p>
          </IconCardContent>
        </IconCard>
      </CardFlexGroup>
      <br />
      <br />
    </Whitebox>
    <Greybox>
      <h2>Individualsoftware vs. Standardsoftware</h2>
      <p>
        Wenn sich mittelständische Unternehmen für den Einsatz einer neuen
        Softwarelösung entschieden haben, kommt es oft zur Frage, ob man auf
        eine Standardlösung oder eine Individuallösung setzen soll. Die Antwort
        auf diese Frage ist oft nicht so einfach wie es scheint.
      </p>
      <div style={{ overflowX: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th />
              <th>Standardsoftware</th>
              <th>Individualsoftware</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vorteile</td>
              <td>
                <ul>
                  <li>Praxiserprobt</li>
                  <li>Geringere Kosten</li>
                  <li>Langjähriger Support</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Passt sich genau den Unternehmensprozessen an</li>
                  <li>
                    Anpassungen im laufe der Zeit relativ einfach immer wieder
                    möglich
                  </li>
                  <li>
                    Vorsprung vor Mitbewerbern durch optimierte Gesamtprozesse
                  </li>
                  <li>Individueller Support</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Nachteile</td>
              <td>
                <ul>
                  <li>
                    Unternehmen muss sich den Softwareprozessen unterordnen
                  </li>
                  <li>Komplizierte Einführungsprozesse</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Hoher initialer Dokumentationsaufwand</li>
                  <li>Höherer Zeitaufwand</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3>Vorteile aus beiden Lösungsansätzen nutzen</h3>
      <p>
        Durch <strong>moderne Software-Architekturen</strong> ist es heute oft
        möglich einen Hybridansatz in betracht zu ziehen. Viele
        Standardanwendungen bieten heute ein breites Spektrum an{' '}
        <strong>Schnittstellen (API's)</strong> mit denen dritte Anwendungen
        kommunizieren können. Dadurch kann man Standardlösungen durch eine
        Individuallösung erweitern und die Vorteile aus beiden Welten nutzen.
      </p>
    </Greybox>
    <BlueBox>
      <br />
      <h2>Sprechen Sie uns an!</h2>
      <p>
        In einem persönlichen Gespräch können wir Ihre Ideen und Fragen
        individuell besprechen und Ihnen einen Vorschlag für das weiteres
        Vorgehen geben.
      </p>
      <LinkButton
        to="/contact/"
        maxWidth="300px"
        bgColor="#B81135"
        color="#fff"
      >
        Um Rückruf bitten
      </LinkButton>
      <br />
    </BlueBox>
    <Whitebox>
      <h2>Möchten Sie mehr über uns erfahren?</h2>
      <p>
        Wir arbeiten mit Kunden aus den unterschiedlichsten Branchen zusammen.
        Dazu gehören Kunden aus der Automobilbranche (Hersteller und
        Zulieferer), dem Maschinenbau, der Tourimus- und Medienbranche. Dadurch
        haben wir bereits Erfahrung mit unterschieldchsten Anforderungen und
        Vorgehensweisen gemacht. Wir freuen uns, dass wir mit vielen Kunden
        nicht nur Einzelprojekte umsetzen durften, sondern sich auch langjährige
        Partnerschaften entwickelt haben.
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >        
        <LinkButton
          to="/software-dev/"
          maxWidth="300px"
          bgColor="#B81135"
          color="#fff"
        >
          ProjektVORGEHEN
        </LinkButton>
      </div>
    </Whitebox>
  </div>
)

export default IndexPage
