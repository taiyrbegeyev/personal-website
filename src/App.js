import React from 'react';
import './App.css';
import Intro from 'containers/Intro/Intro'
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from '@fullpage/react-fullpage';

const anchors = ["firstPage", "secondPage", "thirdPage"];

/*
  In order to prevent fullpage.js from creating the scrollbar in certain
  sections or slides use the class fp-noscroll. 
  For example: <div class="section fp-noscroll">
*/

const App = () => (
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
      console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      return (
        <div>
          <div className="section" >
            <Intro fullpageApi={fullpageApi}/>
          </div>
          <div className="section" />
          <div className="section" />
        </div>
      );
      }
    }
  />
);

export default App;
