import React, { useState } from 'react';
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from '@fullpage/react-fullpage';
import './App.css';
import Intro from 'containers/Intro/Intro'
import SocialMedia from 'components/SocialMedia/SocialMedia';

const anchors = ["firstPage", "secondPage", "thirdPage"];

/*
  In order to prevent fullpage.js from creating the scrollbar in certain
  sections or slides use the class fp-noscroll. 
  For example: <div class="section fp-noscroll">
*/

const App = () => {
  const [windowWidth, setWindowWidth ] = useState(window.innerWidth);
  
  return (
    <ReactFullpage
      bigSectionsDestination={"top"}
      scrollOverflow={true}
      scrollingSpeed={500}
      navigation
      navigationTooltips={anchors}
      onLeave={(origin, destination, direction) => {
        console.log("onLeave event", { origin, destination, direction });
      }}
      render={({ state, fullpageApi }) => {
        return (
          <div>
            <div className="section" >
              <Intro fullpageApi={fullpageApi} windowWidth={windowWidth} setWindowWidth={setWindowWidth}/>
            </div>
            <div className="section">
              <SocialMedia window={windowWidth} setWindowWidth={setWindowWidth}/>
            </div>
            <div className="section">
              <SocialMedia window={windowWidth} setWindowWidth={setWindowWidth}/>
            </div>
          </div>
        );
        }
      }
    />
  );
}

export default App;
