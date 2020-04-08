import React, {useState} from 'react';
import styled from 'styled-components';
import Carousel from "react-multi-carousel";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 3000},
        items: 1,
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 1,
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2,
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1,
    },
};

const Support = styled.div`
  height: 100%;
  background: #fbc91b;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;

const SupportHeader = styled.h1`
  color: black;
  font-weight: bold;
  font-size: 2em;
  padding-bottom: 40px;
  
   @media (max-width: 415px) {
       font-size: 1.4em;
   }
`;

const SupportBusiness = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
   margin: 0 auto;
`;

const SupportBusinessDesc = styled.div`
    font-size: 22px;
    text-align: center;
    color: black;
    margin: 0 auto;
    padding-left: 400px;
    padding-right: 400px;
    line-height: 1.5;
    
    
     @media (max-width: 415px) {
       font-size: 18px;
        padding: 10px 40px 10px 40px;
    }
`;

const SupportBusinessTitle = styled.h1`
    font-size: 1.5em;
    font-weight: bold;
    color: black;
`;

const SupportBusinessImg = styled.img`
  width: 200px;
  height: 200px;
`;

const SecondaryButton = styled.div`
  background: black;
  color: white;
  padding: 10px 10px 10px 10px;
  font-size: 16px;
  border: 1px transparent solid;
  border-radius: 20px;
  text-align: center;
  margin: 0 auto;
  width: 200px;
  margin-top: 40px;
  font-weight: bold;
  
  &:hover {
    cursor: pointer
  }
`;

// only import polyfill if scrollBehavior is not supported by browser
if (!('scrollBehavior' in document.documentElement.style)) {
    import('smoothscroll-polyfill').then((smoothscroll) => {
        smoothscroll.polyfill();
    });
}

const WhoWeSupport: React.FC = () => {
    const [open, setOpen] = useState(false);
    const smoothScroll = (target: string) => {
        if (open) {
            setOpen(false);
        }
        const targetElement = document.getElementById(target)?.offsetTop;
        window.scrollTo({
            top: targetElement,
            behavior: 'smooth'
        });
    };

    return (
        <Support>
            <SupportHeader>WHO WILL THE FUND HELP?</SupportHeader>
            <Carousel responsive={responsive} infinite>
                <SupportBusiness>
                    <SupportBusinessImg src="https://res.cloudinary.com/doaxab4ly/image/upload/v1586243859/food_delivery_circle_j53j3f.png" alt="singapore hawker center"/>
                    <SupportBusinessTitle>
                        The Hawker Owners
                    </SupportBusinessTitle>
                    <SupportBusinessDesc>
                        Help them get on all delivery apps - and offset some of the delivery fees so they remain profitable.
                    </SupportBusinessDesc>
                </SupportBusiness>
                <SupportBusiness>
                    <SupportBusinessImg src="https://res.cloudinary.com/doaxab4ly/image/upload/v1586250220/small_business_circle_mcn2ky.png" alt="singapore hawker center"/>
                    <SupportBusinessTitle>
                        The Small Businesses
                    </SupportBusinessTitle>
                    <SupportBusinessDesc>
                        Teach them how to use online marketing more effectively through Facebook, Youtube, and Instagram advertising help.
                    </SupportBusinessDesc>
                </SupportBusiness>
                <SupportBusiness>
                    <SupportBusinessImg src="https://res.cloudinary.com/doaxab4ly/image/upload/v1586246638/video_maker_freelance_circle_z09vy7.png" alt="singapore hawker center"/>
                    <SupportBusinessTitle>
                        The Freelance Producers
                    </SupportBusinessTitle>
                    <SupportBusinessDesc>
                        Help them create a website so they can advertise their services online and get more leads.
                    </SupportBusinessDesc>
                </SupportBusiness>
                <SupportBusiness>
                    <SupportBusinessImg src="https://res.cloudinary.com/doaxab4ly/image/upload/v1586251450/freelance_teacher_circle_tghd6b.png" alt="singapore hawker center"/>
                    <SupportBusinessTitle>
                        The Independent Teachers
                    </SupportBusinessTitle>
                    <SupportBusinessDesc>
                        Help them offer their services online and create an online class for them.
                    </SupportBusinessDesc>
                </SupportBusiness>
            </Carousel>
            <SecondaryButton onClick={() => smoothScroll('applyForFund')}>
                APPLY
            </SecondaryButton>
        </Support>
    );
}

export default WhoWeSupport;