import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './App.css';
import Intro from 'containers/Intro/Intro';
import AboutMe from 'containers/AboutMe/AboutMe';

const pluginWrapper = () => {
  require('fullpage.js/vendors/scrolloverflow'); // Optional. When using scrollOverflow:true
};

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
  componentWillMount () {
    if( window.localStorage )
          {
            if( !localStorage.getItem('firstLoad') )
            {
              localStorage['firstLoad'] = true;
              window.location.reload();
            }  
            else
              localStorage.removeItem('firstLoad');
    }}
  
  render() { 
    return (
      <ReactFullpage
        bigSectionsDestination={"top"}
        scrollingSpeed={750}
        pluginWrapper={pluginWrapper}
        navigation
        navigationTooltips={anchors}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <Intro fullpageApi={fullpageApi}/>
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
