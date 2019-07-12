import styled from 'styled-components';
import {Paper} from '@material-ui/core';
import { device } from 'config/device';

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const AboutMeWrapper = styled(Paper)`
  width: 80vw;
  background-color: gray;
  display: flex;
  
  @media ${device.tablet} {
    width: 40vw;
  }
`

export const AboutMeInfoSection = styled.div`
  width: 100%;
`

export const AboutMeImage = styled.div`
  background-image: url("${props => props.imageUrl}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 15rem;
`

export const AboutMeInfo = styled.div`
  height: auto;
  font-size: 1.6rem;
`

export const AboutMePictureWrapper = styled.div`
  position: absolute;
  margin-top: 8.6rem;
  margin-left: 1rem;
`

export const AboutMePicture = styled.img`
  border-radius: 50%;
  border: 0.4rem solid white;
  width: 12.8rem;
`
