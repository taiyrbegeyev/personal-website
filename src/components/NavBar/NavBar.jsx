import React, { useState, useEffect } from 'react';
import { 
  Header, Nav, Logo, NavBarItems, Anchor,
  DeveloperIcon, UnorderedList, ListItem,
  ToggleButtonItem, LogoName
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
        <LogoName>Taiyr Begeyev</LogoName>
      </Logo>
      <NavBarItems>
      <UnorderedList>
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
      </UnorderedList>         
      <ToggleButtonItem>
        <ToggleButton />
      </ToggleButtonItem>
      </NavBarItems>
    </Nav>
  </Header>
  );
}

export default NavBar;