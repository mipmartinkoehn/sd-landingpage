import React from 'react'
import Link from 'gatsby-link'
import NavigationListItem from './navigation-list-item.module';
import styles from './navigation-list.module.css'

class NavigationList extends React.Component {
  render() {
    const { imgSrc, dark } = this.props;
    const menuEntries = [
      {title: "Kontakt", path:"/contact/"},
      {title: "IT-Beratung", path:"/it-consulting/"},
      {title: "Projekte", path:"/projects/"},
      {title: "Support und Schulungen", path:"/support/"},
      {title: "Softwareentwicklung", path:"/software-dev/"}
    ];
    const listItems = menuEntries.map( (navItem, i) =>
      <NavigationListItem 
        key={i}
        dark={dark}
        path={navItem.path}
        title={navItem.title} />
    );

    return (
      <div style={{ paddingTop: '15px' }}>
        <div className="center-mode">
          <Link to="/">
            <img src={imgSrc} className={styles.logoStyle} />
          </Link>
          <ul className={styles.ulStyle}>
            {listItems}            
          </ul>
        </div>
      </div>
    )
  }
}

export default NavigationList
