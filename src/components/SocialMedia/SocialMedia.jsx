import React from 'react';
import { SocialContainer, SocialItemList, SocialItem, SocialLink } from './styles';
import { socialMedia } from 'config/index';
import FormattedIcon from 'icons/FormattedIcon';

const SocialMedia = (props) => {
  //const { windowWidth } = props; 
  
  return (
    <SocialContainer>
      <SocialItemList>
        {
          socialMedia.map( ({url, name}, i) => (
            <SocialItem key={i}>
              <SocialLink 
                href={url}
                target="_blank"
                aria-label={name}
              >
                <FormattedIcon name={name} />
              </SocialLink>
            </SocialItem>
          ))
        }
      </SocialItemList>
    </SocialContainer>
  );
}

export default SocialMedia;