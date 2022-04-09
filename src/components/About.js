import React from 'react'
import SectionTitle from './SectionTitle';

import PText from './PText';
import AboutImg from '../assets/images/about-sec-img.png';
import styled from 'styled-components';
import Button from './Button';


const AboutStyle = styled.div`
padding: 10rem 0;
.container {
    display: flex;
    align-items:center;
    justify-content: flex-start;
    text-alignment: left;
}

.about__left,
.about__right{
    flex:1;
}

.about__title{
    text-align:left;
}

.para{
    margin-top: 2rem;
    margin-left: 0;
}

.about__buttons{
display: flex;
align-items: center;
justify-content: flex-start;
gap: 2rem;
margin-top: 2rem;
}

@media only screen and (max-width:950px){
    .about__left{
        flex:4;
    }

    .about__right {
        flex: 3;
    }
}

@media only screen and (max-width:768px){
    .container{
        flex-direction:column;
        text-align: center;
    
    }

.about__left,
.about__right{
    width:100%;
}

.about__right{
    margin-top:3rem;
}
.about__title{
    text-align: center;
}
.para{
    margin: 0 auto;
}

.about__buttons{
    flex-direction: column;
    gap:0;
    .button-wrapper,
    a{
        width: 100%;
        text-align: center;
    }
}

}
`;

export default function About() {
  return (
    <AboutStyle>
      <div className="container">
          <div className="about__left">
              <SectionTitle 
              
              subHeading="Let me introduce myself"
              heading="About Me"
              />
              <PText>
                Currently a final year Computer Science and Engineering student. I am a 
                web developer with some knowledge of machine learning as well. I am from Nepal.
                I am a fast learner and I like taking challanges and solving real-life problems.
              </PText>
              <div className="about__buttons">
                  <Button btnLink="/projects" btnText="Works"/>
                  <Button btnLink="/about" btnText="Read More" outline />

              </div>
          </div>
          <div className="about__right">
              <img src={AboutImg} alt="" />
          </div>
      </div>
    </AboutStyle>
  )
}
