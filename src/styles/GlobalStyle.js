import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`


}
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg: #262626;
    --gray-1: #BCB4B4;
    --deep-dark: #1E1E1E;
    --gray-2: #363636;
    --white : white;
    --black: black;
  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--dark-bg);
  }
  ul,li{
    list-style: none;
  }
  p{
    line-height: 2.2rem;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;   
  }

/* Smooth Scroll  */
  [data-scrollbar] {
    margin-right:0;
    padding-right:0;
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }

    .scrollbar-track-y {
    top: 0;
    right: 0;
    width: 3px;
    height: 100%;
}

    .scrollbar-track.scrollbar-track-y {
      z-index: 100;
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }

 
`;
export default GlobalStyles;
