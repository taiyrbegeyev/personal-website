import React, { useState, useEffect } from 'react';
import {BackgroundImage, RVH, NameContainer, Title, SubTitle, ScrollDown} from './styles';
import desktopImage from 'assets/IMG_1758.jpg';
import mobileImage from 'assets/IMG_1766.jpg';

const Intro = (props) => {
  const [windowWidth, setWindowWidth ] = useState(window.innerWidth);
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
            <h1>Taiyr Begeyev</h1>
          </Title>
          <SubTitle>
            <p>Software Engineer</p>
          </SubTitle>
        </NameContainer>
        <ScrollDown onClick={() => props.fullpageApi.moveSectionDown()} />
      </RVH>
    </BackgroundImage>
  );
};

export default Intro;
