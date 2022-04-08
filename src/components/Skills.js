import React from 'react'
import styled from "styled-components";
import {SiJavascript, SiHtml5, SiCss3, SiGit, SiMongodb} from 'react-icons/si';
import {FaReact, FaNodeJs} from 'react-icons/fa';
import SectionTitle from './SectionTitle';


const SStyles = styled.div`
.container{
flex-direction:row;
display:flex;
align-items:center;
flex-wrap:wrap;
justify-content:center;
}
svg{
    
    width: 7rem;
    border-radius:40%;
    margin: 1rem 1rem 1rem 1rem;
}
`;



export default function skills() {
  return (
    <SStyles>
    <SectionTitle
    heading={null}
    subHeading="My Skills">
    </SectionTitle>

      <div className="container">
            <SiJavascript />
            <FaReact />
            <SiHtml5 />
            <SiCss3 />
            <FaNodeJs />
            <SiGit />
            <SiMongodb />
      </div>

    </SStyles>
  )
}
