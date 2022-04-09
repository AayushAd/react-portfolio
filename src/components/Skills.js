import React from 'react'
import styled from "styled-components";
import {SiJavascript, SiHtml5, SiCss3, SiPython, SiGit, SiMongodb, SiAdobephotoshop} from 'react-icons/si';
import {FaReact, FaNodeJs} from 'react-icons/fa';
import SectionTitle from './SectionTitle';


const SStyles = styled.div`
padding: 5rem 0;
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

@media only and screen (max-width:768px){
    svg{
    
    width: 4rem;
    border-radius:40%;
    margin: 0 1rem;
}
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
            <FaReact />
            <SiJavascript />
            <SiHtml5 />
            <SiCss3 />
            <FaNodeJs />
            <SiGit />
            <SiMongodb />
            <SiAdobephotoshop />
            <SiPython />
      </div>

    </SStyles>
  )
}
