import React from "react";
import PText from "./PText";
import FooterCol from "./FooterCol";
import styled from "styled-components";

const FooterStyles = styled.div`
  padding-top: 7rem ;
  padding-bottom: 1rem ;

  background-color: var(--deep-dark);

  .container {
    display: flex;
    gap: 3rem;
  }

  .footer__col1 {
    flex: 2;
  }

  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright{
      background-color: var(--dark-bg);
      text-align: left;
      padding: 1rem 0;
      margin-top:5rem;
      .para{
          margin-left:0;
      }
      .container{
        p {
        a {
  text-decoration: underline;
}}}


      }
  }
    
    @media only screen and (max-width: 768px){
        .container{
            flex-direction:column;
            gap: 0rem;
            & > div {
              margin-top: 5rem;
            }
        }
        .footer__col1 .para{
          max-width: 100%;
        }
        .copyright {
          .container{
            div{
              margin-top: 0;
            }
          }
        }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Aayush Adhikari</h1>
          <PText>
            Hey so you did make it to the last. Thankyou!!
            Have a good day. 
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: "Home",
                path: "/",
                type: "Link",
              },
              {
                title: "About",
                path: "/about",
                type: "Link",
              },
              {
                title: "Projects",
                path: "/projects",
                type: "Link",
              },
              {
                title: "Contact",
                path: "/contact",
                type: "Link",
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: "+9779840738108",
                path: "tel:+9779840738108",
              },
              {
                title: "aayush.adhikari.extra@gmail.com",
                path: "mailto:aayushadhikari07@gmail.com",
              },
              {
                title: "Kathmandu, Nepal",
                path: "https://www.google.com/maps/@27.7055547,85.2589709,12.27z?hl=en",
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: "Github",
                path: "https://github.com/AayushAd",
              },
              {
                title: "Insta",
                path: "http://instagram.com/",
              },
              {
                title: "Linkedin",
                path: "https://www.linkedin.com/in/aayush-adhikari/",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2022 - Aayush | Designed By {""}
            <a href="_blank">AdAd</a>
          </PText>
        </div>
      </div>
    </FooterStyles>
  );
}
