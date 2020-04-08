import React from 'react';
import styled from 'styled-components';
import { StylesSchema } from '../../../shared/enums/styles';
import { ReactVideoPlay, VideoSourceType } from 'react-video-play';
import 'react-video-play/public/css/react-video-play.css';

const CallToActionHeader = styled.p`
  text-align: justify;
  font-size: 2.5em;
  font-weight: bold;
  
  @media (max-width: 415px) {
    font-size: 22px;
    text-align: left;
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
  padding: 2rem 2rem;  
  position: relative;
  height: 350px;
  border-bottom: 2px solid white;
`;

const CallToActionVideo = styled.div`
  @media (max-width: 415px) {
    margin-top: 80px;
    width: 90vw;
    height: 190px;
  }
  height: 360px;
  width: 40vw;
  border: 3px solid white;
  border-radius: 5px;
  position: absolute;
  top: 240px  
`;

const HighlightDescription = styled.span`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.5;
  text-align: center;
  
  @media (max-width: 415px) {
    font-size: 16px;
    text-align: justify
  }
`;

const src = [
  {
    name: 'video',
    source: [{
      source: 'https://res.cloudinary.com/dhoy4ync0/video/upload/v1584441229/nas_company_final_gn0txs.mp4',
      type: VideoSourceType.video_mp4
    }]
  }
]

const CallToAction: React.FC = () => {
  return (
    <CallToActionWrapper>
      <CallToActionHeader>
        HELP 
        <CallToActionHighlight>
          BUSINESS
        </CallToActionHighlight>
          MOVE 
        <CallToActionHighlight>
          ONLINE
        </CallToActionHighlight>
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
}

export default CallToAction;
