import styled, { keyframes } from 'styled-components';
import Div100vh from 'react-div-100vh';

const BackgroundImage = styled.div`
  /* Center and scale the image nicely */
  background-image: url("${props => props.imageUrl}"); 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const RVH = styled(Div100vh)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NameContainer = styled.div`
  margin-bottom: ${props => props.titleMargin}vh;
  color: white;
  text-align: center;
  font-family: 'Open Sans', sans-serif !important; 
`;

const Title = styled.div`
  border-bottom: 1px solid rgba(255,255,255,0.55);
  font-size: 3vh;
  padding: 5px 0;
`;

const SubTitle = styled.div`
  font-size: 3.5vh;
  padding: 5px 0;
`;

// create keyframes
const scrolldown = keyframes`
  0%,
  100%,
  20%,
  50%,
  80% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  60% {
    -webkit-transform: translateY(-5px);
    -ms-transform: translateY(-5px);
    transform: translateY(-5px);
  }
`;

const ScrollDown = styled.a`
  opacity: 1;
  -webkit-transition: all .5s ease-in 3s;
  transition: all .5s ease-in 3s;

  display: block;
  position: absolute;
  bottom: 30px;
  width: 42px;
  height: 42px;
  border: 2px solid #FFF;
  background-size: 14px auto;
  border-radius: 50%;
  z-index: 2;
  -webkit-animation: ${scrolldown} 2s infinite 2s;
  animation: ${scrolldown} 2s infinite 2s;
  -webkit-transition: all .2s ease-in;
  transition: all .2s ease-in;
  transform: scale(1);

  &:before {
    position: absolute;
    top: calc(50% - 8px);
    left: calc(50% - 6px);
    transform: rotate(-45deg);
    width: 12px;
    height: 12px;
    content: "";
    border: 2px solid white;
    border-width: 0px 0 2px 2px;
  }
`;

export {BackgroundImage, RVH, NameContainer, Title, SubTitle, ScrollDown};
