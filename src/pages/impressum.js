import React, { Component } from 'react'
import Whitebox from '../components/white-box/white-box.module'

class Impressum extends Component {
  render() {
    return (
      <div>
        <Whitebox>
          <p>
            <strong>mip Consult GmbH</strong>
            <br />
            Alte Jakobstraße 77<br />
            10179 Berlin<br />
            <br />
            Tel: +49 (0) 30 – 20 88 999 – 00<br />
            Fax: +49 (0) 30 – 20 88 999 – 88<br />
            <br />
            Internet: www.mip-consult.de<br />
            E-Mail: kontakt@mip-consult.de<br />
            <br />
            Vertretungsberechtigte Geschäftsführer: Asmus Eggert, Uwe Leider<br />
            Registergericht: Amtsgericht Berlin-Charlottenburg<br />
            Registernummer: HRB 121869<br />
            USt.-Identnr.: DE249276018<br />
            Verantwortlich nach § 55 Abs. 2 RStV: Asmus Eggert
          </p>

          <h3>Streitbeilegung:</h3>
          <p>
            Die EU Kommission stellt unter dem Link
            https://ec.europa.eu/consumers/odr/ eine
            Online-Streitbeilegungsplattform („OS-Plattform“) bereit. Diese gibt
            Verbrauchern die Möglichkeit, Streitigkeiten im Zusammenhang mit
            ihrer Online-Bestellung zunächst ohne Einschaltung eines Gerichts zu
            klären.
          </p>

          <h3>Hinweis gemäß § 36 Verbraucherstreitbeilegungsgesetz (VSGB):</h3>
          <p>
            mip Consult GmbH nimmt nicht an einem Streitbeilegungsverfahren vor
            einer Verbraucherschlichtungsstelle im Sinne des VSBG teil und ist
            hierzu auch nicht verpflichtet.
          </p>

          <h3>Haftungsausschluss für Inhalte und Links</h3>
          <p>
            Alle Angaben und Daten wurden mit größtmöglicher Sorgfalt und nach
            bestem Wissen erstellt. Eine Gewähr für die Vollständigkeit und
            Richtigkeit der Angaben und Daten kann jedoch nicht übernommen
            werden.
          </p>
          <p>
            mip Consult GmbH erklärt ausdrücklich, dass zum Zeitpunkt einer
            Linksetzung die entsprechenden verlinkten Seiten frei von illegalen
            Inhalten waren. mip Consult GmbH hat keinerlei Einfluss auf die
            aktuelle und zukünftige Gestaltung und auf die Inhalte der
            verlinkten Seiten.
          </p>
          <p>
            Aus diesem Grund distanziert sich mip Consult GmbH hiermit
            ausdrücklich von allen Inhalten aller gelinkten Seiten, die nach der
            Linksetzung verändert wurden. Für den Inhalt der verlinkten Seite
            sind ausschließlich deren Betreiber verantwortlich.
          </p>

          <h3>Urheberrecht</h3>
          <p>
            Alle in diesem Angebot veröffentlichten Beiträge sind
            urheberrechtlich geschützt. Kein Teil dieses Angebots darf außerhalb
            der Grenzen des Urheberrechtsgesetzes ohne schriftliche Genehmigung
            der mip Consult GmbH in irgendeiner Form reproduziert werden.
          </p>
        </Whitebox>
      </div>
    )
  }
}

export default Impressum
