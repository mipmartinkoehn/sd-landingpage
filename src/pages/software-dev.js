import React from 'react'

import Greybox from '../components/grey-box/grey-box.module'
import BlueBox from '../components/blue-box/blue-box.module'
import Whitebox from '../components/white-box/white-box.module'

import Golang from '../images/golang-blue.svg'
import Angular from '../images/angular.svg'
import MongoDB from '../images/mongodb.png'
import NodeJs from '../images/nodejs.png'
import Firebase from '../images/firebase-logo.svg'
import Loopback from '../images/loopback-logo.png'
import Docker from '../images/docker_vertical.png'

const SoftwareDev = () => (
  <div>
    <Whitebox>
      <h2>Vorgehen</h2>
      <p>
        Bei der mip arbeiten wir mit verschienden Vorgehensmodellen. Das jeweilige Vorgehensmodell strukturiert ein Projekt, 
        um die komplexität eines Projektes überschaubar zu halten. Dadurch wird ein Projekt erst planbar und vorgegebne Budgets und Laufzeiten können eingehalten werden.
        Dabei arbeiten wir mit 2 grundsätzlichen Vorgehensmodellen.
        Zum einen mit agilen Vorgehnsmodellen wie SCRUM oder Kanban, oder anderen Falls mit einer Mischform auf klassischen (Wasserfall, V-Modell) und agilen Methoden.
        Welche Methode die richtige ist, hängt stark vom jeweiligen Projekt ab.
      </p>
      <h3>Agile Vorgehensmodelle</h3>
      <p>
        Die Entstehung von Software ist ein kreativer Prozess bei dem es häufig zu Änderungen bei Marktanforderungen,
        beteilgter Personen oder dem technischen Umfeld kommen kann. Aus diesem Grund eigenen sich Agile Vorgehensmodelle in den meisten
        Fällen besser als klassische Ansätze für Software Entwicklung.<br/>
        Die Projekte laufen so ab, dass Spezifikation, Entwicklung, Testen und Veröffentlichen der Software ein sich immer wiederholender Prozess ist.
        Nach jedem Zyklus erhält man eine lauffähige Version der Software, die der Kunde dann bewerten kann. Dadurch hat der Kunde die Möglichkeit zeitnah
        Feedback zu geben um damit wiederum direkt Einfluss auf die weitere Entwicklung zu nehmen.
      </p>
      <p>Bei der mip verwenden wir in den meisten Fällen Scrum, Kanban oder eine Kombination aus beiden Ansätzen als agile Methode.</p>

      <h3>Kombination klassischer und agiler Methoden</h3>
      <p>
        Neben dem Agilen Vorgehensmodell hat sich die Anwendung von Mischformen aus einem klassischen und
        agilen Vorgehensmodell als sehr erfolgreich erwiesen. Aus unserer Erfahrung kann es sinnvoll sein, nach einem klassischer Vorgehensmodell vorzugehen,
        dieses aber mit Methoden und Techniken aus der agilen Softwareentwicklung zu verbinden.
      </p>
    </Whitebox>
    <Greybox>
      <h2>Web-Anwendungen</h2>
      <p>
        Die Entwicklung von Webanwendungen umfasst im allgmeinen das Erarbeiten und Dokumentatieren der Anforderungen, 
        UX/UI-Design, die Programmierung, das Testen und natürlich den Betrieb der Anwendung.<br/>
        Wir haben uns als mip auf die Entwicklung von Web-Anwendungen spezialisiert und in diesem Bereich umfangreiche Erfahrung und Wissen 
        mit verschiedenen Technologien aufgebaut.</p>
        <p>Zu Web-Anwendungen zählen nicht nur Webseiten, sondern auch Intranet-Anwendungen in Unternehmen (z.B. Anwendungen zur Buchaltung, Kundenbetreuung etc.). 
        Im Prinzip handelt es sich um alle Anwendungen die auf dem Client-Server-Modell aufbauen.
        Webanwendungen haben den Vorteil, dass diese nicht lokal auf den Geräten der Nutzer 
        installiert werden müssen, sondern lediglich ein Gerät mit einem Browser benötigt wird. Das kann sowohl ein normaler Desktop-PC sein, aber 
        auch Tablets oder Mobiltelefone eigenen sich zum Ausführen von Web-Anwendungen.<br/>
        Im mip Software Team finden sich alle Kompetenzen wieder die Sie für die Entwicklung einer Web-Anwendung benötigen.
      </p>
    </Greybox>
    <BlueBox>
      <h2>Alte Anwendungen auf aktuelle Technologien migrieren</h2>
      <p>
        Heute ändern sich die Anforderungen an Software schneller als je zuvor.
        Dies erfordert eine der heutigen Zeit angemessene Architektur, die die
        notwendige Agilität ermöglicht um Schritt zu halten mit ständig
        wechselnden Anforderungen.
      </p>
      <p>
        Ungewollte Abhängigkeiten, die im Laufe der Zeit gewachsen sind, lassen
        die Architektur sehr unübersichtlich aussehen. Solche
        Monolithen weisen eine stark erhöhte Komplexität auf. Dies verringert
        die Produktivität aufgrund von Koordinierungsaufwänden zwischen
        verschiedenen Teams, komplizierte Releases und schlechte Wartbarkeit.
        Als Gegenmaßnahme haben Unternehmen agile Methoden wie Scrum eingeführt,
        um ihre Softwareentwicklungsprozesse zu optimieren. Bei der Agilität in
        den Prozessen kann auf technischer Ebene aber oft nicht mitgehalten
        werden. Daher empfiehlt es sich auch auf technischer Ebene die
        Software-Archtiktur auf ein agileres Modell umzustellen.
      </p>
      <p>
        Ein geeignetes Architekturmuster um komplexe Anwendungen in kleinere
        Prozesse runter zu brechen und unabhängig von einander zu Entwickeln zu
        zu Veröffentlichen sind Microservices. Microservices haben typischerweise die folgenden Eigenschaften:
      </p>
      <ul>
        <li>Die Services können einfach ersetzt werden.</li>
        <li>Die Dienste haben eine einzige Geschäftsfunktion.</li>
        <li>Der Nutzen für den Benutzer steht im Mittelpunkt.</li>
        <li>Ein Microservice wird nur von einem Team entwickelt.</li>
        <li>Die Schnittstellen verstecken Implementierungsdetails.</li>
        <li>Microservices werden gegenüber anderen Services isoliert.</li>
        <li>Wie alle Services müssen auch Microservices sicher sein.</li>
      </ul>
      <p>
        Von den alten monolitischen System hin zu einer agilen
        Microservice-Architektur zu wechseln ist kein Prozess der über Nacht
        abläuft. Man muss genau abwägen wann und welche Teile der bisherigen
        Archtiktur in kleinere Applikationen (Microservices) aufgeteilt
        werden können und wie diese wieder in die Gesamtarchitektur integriert
        werden.
      </p>
      <p>
        Eine neue Architektur bringt auch andere Seiteneffekte mit sich, die bei
        einer Umstellung zu betrachten sind. Folgende Fragestellungen tauchen
        dabei immer wieder auf:
      </p>
      <ul>
        <li>Wie werden Microservice deployed?</li>
        <li>
          Wie behalte ich den Überblick über die wachsende Service Struktur?
        </li>
        <li>Wie kommunizieren die verschiedenen Services miteinander?</li>
      </ul>
      <p>
        Wir helfen Ihnen diese Fragen individuell zu beantworten, um eine
        möglichst reibungslose Migration von Ihrer monolitischen
        System-Architektur zu einer flexiblen Microservice Architektur zu
        schaffen.
      </p>
    </BlueBox>
    <Whitebox>
      <h2>Technologien</h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <div style={{ margin: '0 1rem' }}>
          <a href="https://angular.io/">
            <img src={Angular} style={{ height: '200px' }} />
          </a>
        </div>
        <div style={{ margin: '2rem 1rem' }}>
          <a href="https://firebase.google.com/">
            <img src={Firebase} style={{ maxHeight: '200px' }} />
          </a>
        </div>
        <div style={{ margin: '0 1rem' }}>
          <a href="https://golang.org/">
            <img src={Golang} style={{ height: '200px' }} />
          </a>
        </div>
        <div style={{ margin: '0 1rem' }}>
          <a href="https://nodejs.org/">
            <img src={NodeJs} style={{ height: '200px' }} />
          </a>
        </div>
        <div style={{ margin: '0 1rem' }}>
          <a href="https://loopback.io/">
            <img src={Loopback} style={{ maxHeight: '200px' }} />
          </a>
        </div>
        <div style={{ margin: '0 1rem' }}>
          <a href="https://www.docker.com/">
            <img src={Docker} style={{ maxHeight: '200px' }} />
          </a>
        </div>
        <div style={{ margin: '0 1rem' }}>
          <a href="https://www.mongodb.com/">
            <img src={MongoDB} style={{ maxHeight: '150px' }} />
          </a>
        </div>
      </div>
    </Whitebox>
  </div>
)

export default SoftwareDev
