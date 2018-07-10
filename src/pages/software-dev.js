import React from 'react'

import Greybox from '../components/grey-box/grey-box.module';
import BlueBox from '../components/blue-box/blue-box';
import Whitebox from '../components/white-box/white-box.module';

import CodeWhite from '../images/code-icon_weiß.png';
import RocketWhite from '../images/raketen-icon_weiß.png';
import ConceptWhite from '../images/konzept-icon_weiß.png';
import MagnifierWhite from '../images/lupe-icon_weiß.png';
import IconBall from '../components/icon-ball/icon-ball';
import Golang from '../images/golang-blue.svg';
import Angular from '../images/angular.svg';
import MongoDB from '../images/mongodb.png';
import NodeJs from '../images/nodejs.png';
import Firebase from '../images/firebase-logo.svg';
import Loopback from '../images/loopback-logo.png';

const SoftwareDev = () => (
<div>
  <Whitebox>
    <h2>Vorgehen</h2>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat imperdiet sed euismod nisi porta lorem mollis. Non enim praesent elementum facilisis leo vel fringilla. Quisque non tellus orci ac auctor. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Amet facilisis magna etiam tempor. Mauris ultrices eros in cursus turpis massa tincidunt. Sit amet cursus sit amet dictum sit amet justo. Erat nam at lectus urna duis convallis. Ultricies tristique nulla aliquet enim tortor. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Ultrices dui sapien eget mi proin. Nisl tincidunt eget nullam non nisi. Vulputate odio ut enim blandit volutpat. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan.  
    </p>
    <br />
    <div style={{textAlign: 'center'}}>
      <div style={{display: 'inline-block'}}>
        <IconBall bgColor='#13597C' color='#fff' imgSrc={ConceptWhite}>
          Konzept
        </IconBall>
      </div>
    </div>
    <div style={{textAlign: 'center'}}>
      <div style={{display: 'inline-block'}}>
        <IconBall bgColor='#13597C' color='#fff' imgSrc={RocketWhite}>
          Veröffentlichen
        </IconBall>
      </div>
      <div style={{display: 'inline-block', width: '12.5rem'}} />
      <div style={{display: 'inline-block'}}>
        <IconBall bgColor='#13597C' color='#fff' imgSrc={CodeWhite}>
          Entwicklung
        </IconBall>
      </div>
    </div>
    <div style={{textAlign: 'center'}}>
      <div style={{display: 'inline-block'}}>
        <IconBall bgColor='#13597C' color='#fff' imgSrc={MagnifierWhite}>
          Testen
        </IconBall>
      </div>
    </div>
  </Whitebox>
  <Greybox>
    <h2>Web-Anwendungen</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat imperdiet sed euismod nisi porta lorem mollis. Non enim praesent elementum facilisis leo vel fringilla. Quisque non tellus orci ac auctor. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Amet facilisis magna etiam tempor. Mauris ultrices eros in cursus turpis massa tincidunt. Sit amet cursus sit amet dictum sit amet justo. Erat nam at lectus urna duis convallis. Ultricies tristique nulla aliquet enim tortor. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Ultrices dui sapien eget mi proin. Nisl tincidunt eget nullam non nisi. Vulputate odio ut enim blandit volutpat. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan.
    </p>
  </Greybox>
  <BlueBox>
    <h2>Migration von alten Systemen</h2>
    <p style={{color: '#fff'}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat imperdiet sed euismod nisi porta lorem mollis. Non enim praesent elementum facilisis leo vel fringilla. Quisque non tellus orci ac auctor. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Amet facilisis magna etiam tempor. Mauris ultrices eros in cursus turpis massa tincidunt. Sit amet cursus sit amet dictum sit amet justo. Erat nam at lectus urna duis convallis. Ultricies tristique nulla aliquet enim tortor. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Ultrices dui sapien eget mi proin. Nisl tincidunt eget nullam non nisi. Vulputate odio ut enim blandit volutpat. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan.
    </p>
  </BlueBox>
  <Whitebox>
    <h2>Technologien</h2>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
        <div style={{margin: '0 1rem'}}>
          <a href="https://angular.io/"><img src={Angular}   style={{height: '200px'}}/></a>
        </div>
        <div style={{margin: '2rem 1rem'}}>
        <a href="https://firebase.google.com/"><img src={Firebase}   style={{maxHeight: '200px'}}/></a>
        </div>
        <div style={{margin: '0 1rem'}}>
        <a href="https://golang.org/"><img src={Golang}   style={{height: '200px'}}/></a>
        </div>
        <div style={{margin: '0 1rem'}}>
        <a href="https://nodejs.org/"><img src={NodeJs}   style={{height: '200px'}}/></a>
        </div>
        <div style={{margin: '0 1rem'}}>
        <a href="https://loopback.io/"><img src={Loopback}   style={{maxHeight: '200px'}}/></a>
        </div>
        <div style={{margin: '0 1rem'}}>
        <a href="https://www.mongodb.com/pressroom/"><img src={MongoDB}   style={{maxHeight: '100px'}}/></a>
        </div>
      </div>
  </Whitebox>
</div>
)

export default SoftwareDev;
