import React, { useState } from 'react';
import SocialMedia from 'components/SocialMedia/SocialMedia';
import NavBar from 'components/NavBar/NavBar';

const AboutMe = (props) => {
  const [windowWidth ] = useState(window.innerWidth);

  return(
    <React.Fragment>
      <NavBar/>
      <SocialMedia />
    </React.Fragment>
  );
}

export default AboutMe;