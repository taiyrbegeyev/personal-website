import styled from 'styled-components';
import { device } from 'config/device';

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  overflow: hidden;
  font-family: 'Open Sans', sans-serif !important; 
`;

const Nav = styled.nav`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  color: #33333f;
`;

const LogoName = styled.p`
  font-weight: "550";
  display: none;

  @media ${device.laptop} {
    display: block;
  }
`;

const NavBarItems = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

const Anchor = styled.a`
  outline: none;
  text-decoration: none;
  color: #776f8f;
  cursor: pointer;
  padding: 0 2rem;
`;

const DeveloperIcon = styled.img`
  width: 4rem;
  height: 4rem;
`;

const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: none;

  @media ${device.tablet} {
    display: flex;
  }
`;

const ListItem = styled.li`
`;

const ToggleButtonItem = styled.div`
  padding: 0 2rem;

  @media ${device.tablet} {
    display: none;
  }
`;

export { 
  Header, Nav, Logo, NavBarItems, Anchor,
  DeveloperIcon, UnorderedList, ListItem,
  ToggleButtonItem, LogoName
};