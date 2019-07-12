import React, { useState } from 'react';
import SocialMedia from 'components/SocialMedia/SocialMedia';
import NavBar from 'components/NavBar/NavBar';
import { 
  MainContainer, AboutMeWrapper,
  AboutMeImage, AboutMePicture,
  AboutMeInfo, AboutMeInfoSection,
  AboutMePictureWrapper
} from './styles';
import profilePic from 'assets/taiyr.png';
import profileImg from 'assets/taiyrKid.jpg';

const AboutMe = (props) => {
  const [windowWidth ] = useState(window.innerWidth);

  return(
    <MainContainer>
      <AboutMeWrapper>
        <AboutMePictureWrapper>
          <AboutMePicture src={profilePic}/>
        </AboutMePictureWrapper>

        <AboutMeInfoSection>
          <AboutMeImage imageUrl={profileImg} />
          <AboutMeInfo>
            <h2>Taiyr Begeyev</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, quam qui aliquam nulla et accusamus, accusantium ipsam iusto quae ullam repudiandae quos ex enim molestiae aut repellendus exercitationem soluta praesentium.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, quam qui aliquam nulla et accusamus, accusantium ipsam iusto quae ullam repudiandae quos ex enim molestiae aut repellendus exercitationem soluta praesentium.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, quam qui aliquam nulla et accusamus, accusantium ipsam iusto quae ullam repudiandae quos ex enim molestiae aut repellendus exercitationem soluta praesentium.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, quam qui aliquam nulla et accusamus, accusantium ipsam iusto quae ullam repudiandae quos ex enim molestiae aut repellendus exercitationem soluta praesentium.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, quam qui aliquam nulla et accusamus, accusantium ipsam iusto quae ullam repudiandae quos ex enim molestiae aut repellendus exercitationem soluta praesentium.</p>

          </AboutMeInfo>
        </AboutMeInfoSection>  
      </AboutMeWrapper>
      <NavBar/>
      <SocialMedia />
    </MainContainer>
  );
}

export default AboutMe;