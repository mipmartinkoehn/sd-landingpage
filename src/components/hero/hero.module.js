import React from 'react'
import HeroTitle from './hero-title.module'
import styles from './hero.module.css'

const SVGBackground = () => {
  return (<svg
    className={styles.svgStyle}
    width="2000px"
    height="80px"
    viewBox="0 0 2000 80"
    version="1.1"
  >
    <g
      id="Curve"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <path
        d="M2.95875508e-10,0.271075437 C1.44325251e-05,0.0924814466 0.528253498,-5.71696376e-14 1.59600999,-5.68434189e-14 C48.1099871,-5.68434189e-14 1957.58289,1.84741111e-13 2000,8.52651283e-14 C956.905816,171.471291 -0.000614269229,7.87245453 2.95875508e-10,0.271075437 L0,0 L2000,0 L2000,80 L0,80 L0,0.271075437 Z"
        id="Combined-Shape"
        fill="#FFFFFF"
      />
    </g>
  </svg>)
}

class Hero extends React.Component {
  render() {
    const { siteTitle, big } = this.props
    let height = '46vh';
    if (big) {
      height = '100vh';
    }
    return (
      <div className={styles.headerStyle} style={{ height: height }}>
        <SVGBackground />
        <div>
          <HeroTitle location={siteTitle} />
        </div>
        <div>

        </div>        
      </div>
    )
  }
}

export default Hero
