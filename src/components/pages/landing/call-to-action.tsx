import React from 'react';
import styled from 'styled-components';
import { ReactVideoPlay, VideoSourceType } from 'react-video-play';
import { StylesSchema } from '../../../shared/enums/styles';
import 'react-video-play/public/css/react-video-play.css';

const CallToActionHeader = styled.p`
  font-weight: bold;  
  font-size: 1.4rem;
  text-align: left;
  padding-top: 40px;

  @media (min-width: 415px) {
    font-size: 2.5em;
    text-align: justify;
    padding-top: 20px;
  }
`;

const CallToActionHighlight = styled.span`
  font-weight: bold;
  color: white;  
`;

const CallToActionWrapper = styled.section`
  align-items: center;
  background-color: ${StylesSchema.Yellow};
  display: flex;
  flex-direction: column;
  padding: 2rem;  
  position: relative;
  height: 370px;
  border-bottom: 2px solid white;
  
  @media (max-width: 415px) {
    height: 390px;
  }
`;

const CallToActionVideo = styled.div`
  border: 3px solid white;
  border-radius: 5px;
  height: 190px;
  margin-top: 100px;
  position: absolute;
  top: 260px;
  width: 90vw;

  @media (min-width: 415px) {
    margin-top: 0px;
    height: 340px;
    width: 38vw;
  }
   
  @media (min-width: 2000px) {
    height: 470px;
  }
`;

const HighlightDescription = styled.span`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  text-align: justify;

  @media (min-width: 415px) {
    font-size: 18px;
    text-align: center;
  }
`;

const src = [
  {
    name: 'video',
    source: [{
      source: 'https://res.cloudinary.com/doaxab4ly/video/upload/v1586312300/move_online_fund_zfgobo.mp4',
      type: VideoSourceType.video_mp4,
    }],
  },
];

const CallToAction: React.FC = () => (
  <CallToActionWrapper>
    <CallToActionHeader>
      HELP
      {' '}
      <CallToActionHighlight>BUSINESS</CallToActionHighlight>
      {' '}
      MOVE
      {' '}
      <CallToActionHighlight>ONLINE</CallToActionHighlight>
    </CallToActionHeader>
    <HighlightDescription>
      Many small businesses are struggling with COVID-19 Circuit Breaker.
      They don’t know how to move online or they can’t afford to.
      <br />
      The Online Fund is meant to help small businesses in Singapore move their operations online.
    </HighlightDescription>
    <CallToActionVideo>
      <ReactVideoPlay sources={src} />
    </CallToActionVideo>
  </CallToActionWrapper>
);

export default CallToAction;
