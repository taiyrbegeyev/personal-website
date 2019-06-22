import React, { useEffect } from 'react';
import {BackgroundImage, RVH, NameContainer, Title, SubTitle, ScrollDown} from './styles';
import desktopImage from 'assets/IMG_1758.jpg';
import mobileImage from 'assets/IMG_1766.jpg';
import Typist from 'react-typist';

const Intro = (props) => {
  const { windowWidth, setWindowWidth } = props;
  const imageUrl = windowWidth >= 650 ? desktopImage : mobileImage;
  const titleMargin = windowWidth >= 650 ? 9 : 40; 

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  });

  return(
    <BackgroundImage imageUrl={imageUrl} >
      <RVH>
        <NameContainer titleMargin={titleMargin}>
          <Title>
            <Typist cursor={{show: false}} avgTypingDelay={140}>
              <h1>Taiyr Begeyev</h1>
            </Typist>
          </Title>
          <SubTitle>
            <Typist cursor={{show: false}} startDelay={2000}>
              <p>Software Engineer</p>
            </Typist>
          </SubTitle>
        </NameContainer>
        <ScrollDown onClick={() => props.fullpageApi.moveSectionDown()} />
      </RVH>
    </BackgroundImage>
  );
};

export default Intro;
