import React from "react";
import { MdDesktopMac } from "react-icons/md";
import { BsCameraVideo } from 'react-icons/bs';
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import ServicesItem from "./ServicesItem";

const ServicesStyles = styled.div`
    padding: 7rem 0;
    .services__allItems {
        display: flex;
        gap: 10rem;
        justify-content: space-between;
        margin-top: 5rem;
    }

    @media only screen and (max-width: 768px) {
        .services__allItems{
            flex-direction: column;
            max-width: 350px;
            margin: 0 auto;
            margin-top: 5rem;
            gap: 5rem;
        }
    }
`;

const Services = () => {
  return (
    <ServicesStyles>
      <div className="container">
        <SectionTitle heading="Services" subHeading="What will i do for you" />

        <div className="services__allItems">
          <ServicesItem
            icon={<MdDesktopMac />}
            title="Web Dev"
            desc="I am a Full-Stack web developer with knowledge of industry leading technologies like ReactJs., JavaScript., NodeJs., MongoDB etc. I offer services in MERN development."
          />

          <ServicesItem 
            icon={<BsCameraVideo />}
            title="Video Editing"
            desc="I can do simple video editing using softwares like Adobe Premiere Pro. I can offer some services in pre- and post-production editing, storyboarding footage manipulation.  "
          />

          {/* <ServicesItem /> */}
        </div>
      </div>
    </ServicesStyles>
  );
};

export default Services;
