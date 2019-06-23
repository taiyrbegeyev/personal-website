import React, { useState, useEffect } from 'react';
import { 
  Header, Nav, Logo, NavBarItems, Anchor,
  DeveloperIcon, UnorderedList, ListItem 
} from './styles';
import developer from 'assets/developer.png';
import ToggleButton from 'components/ToggleButton/ToggleButton';

const NavBar = (props) => {
  const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

  const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
  },[]);
  
  return (
  <Header>
    <Nav>
      <Logo>
        <Anchor href="/">
          <DeveloperIcon src={developer} />
        </Anchor>
        <p style={{fontWeight: "550"}}>Taiyr Begeyev</p>
      </Logo>
      <NavBarItems>
        <UnorderedList>
          {
            windowWidth > 900 && 
            <React.Fragment>
              <ListItem>
                <Anchor href="/">Education</Anchor>
              </ListItem>
              <ListItem>
                <Anchor href="/">Experience</Anchor>
              </ListItem>
              <ListItem>
                <Anchor href="/">Projects</Anchor>
              </ListItem>
              <ListItem>
                <Anchor href="/">Contact</Anchor>
              </ListItem>
            </React.Fragment>
          }
          { 
            windowWidth <= 900 && 
            <ListItem>
              <ToggleButton />
            </ListItem>
          }
        </UnorderedList>
      </NavBarItems>
    </Nav>
  </Header>
  );
}

export default NavBar;