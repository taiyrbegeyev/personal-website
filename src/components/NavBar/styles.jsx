import styled from 'styled-components';

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
  font-size: 18px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  color: #33333f;
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
  padding: 0 1.5em;
`;

const DeveloperIcon = styled.img`
  width: 40px;
  height: 40px;
`;

const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

const ListItem = styled.li`
  margin-right: 10px;
`;

export { 
  Header, Nav, Logo, NavBarItems, Anchor,
  DeveloperIcon, UnorderedList, ListItem 
};