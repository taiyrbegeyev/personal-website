import React from 'react';
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from '@fullpage/react-fullpage';
import './App.css';
import Intro from 'containers/Intro/Intro';
import AboutMe from 'containers/AboutMe/AboutMe';

const anchors = ["firstPage", "secondPage", "thirdPage"];

/*
  In order to prevent fullpage.js from creating the scrollbar in certain
  sections or slides use the class fp-noscroll. 
  For example: <div class="section fp-noscroll">
*/

/*const useWindowWidth = () => {
  const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

  const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
  },[]);

  return windowWidth;
};*/

class App extends React.Component {
  render() { return (
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
          <ReactFullpage.Wrapper>
            <div className="section" >
              <Intro fullpageApi={fullpageApi}/>
            </div>
            <div className="section">
              <AboutMe/>
            </div>
            <div className="section">
            </div>
          </ReactFullpage.Wrapper>
        );
        }
      }
    />
  );
  }
}

export default App;
