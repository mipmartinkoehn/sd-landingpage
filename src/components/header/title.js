import React from 'react';
import Link, { withPrefix } from 'gatsby-link'

class HeaderTitle extends React.Component {
  constructor(props) {
    super(props);
  }
  getPage() {
    let title = '';
    switch (this.props.location) {
      case withPrefix("/"):
        title = 'INDIVIDUALSOFTWARE: \nSMARTE KONZEPTE. \nZUVERLÄSSIGE UMSETZUNG!';
        break;
      case withPrefix("/software-dev/"):
        title = 'SOFTWAREENTWICKLUNG';
        break;
      case withPrefix("/it-consulting/"):
        title = 'IT-BERATUNG';
        break;
      case withPrefix("/support/"):
        title = 'SUPPORT UND SCHULUNGEN';
        break;
      case withPrefix("/projects/"):
        title = 'PROJEKTE';
        break;
      case withPrefix("/contact/"):
        title = 'KONTAKT';
        break;
      default:
        title = '404'
        break;
      }
      return title;
    };

  render() {
        return (
            <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '7.45rem 1.0875rem',
          }}
        >
        <div style={{textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      maxHeight: '500px',
                      height: '100vh',
                      color: '#fff'}}>
            <h1 style={{ margin: 0 }}>
              {this.getPage()}
            </h1>
          </div>
        </div>
        )
    }
};

export default HeaderTitle;