import styled from 'styled-components';
import { device } from 'config/device';

const SocialContainer = styled.div`
  width: 50px;
  position: absolute;
  bottom: 0;
  left: 2rem;
  color: #a8b2d1;
  display: none;
  @media ${device.tablet} {
    display: inline;
  }
`;

const SocialItemList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 70px;
    margin: 0 auto;
    background-color: #a8b2d1;
  }
`;

const SocialItem = styled.li`
  &:last-of-type {
    margin-bottom: 20px;
  }
  list-style: none;
  margin: 15px 10px;
`;

const SocialLink = styled.a`
  outline: none;
  svg {
    width: 22px;
    height: 22px;
  }
`;

export { SocialContainer, SocialItemList, SocialItem, SocialLink };