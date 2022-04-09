import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/mapp.png';
import PText from './PText';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
    {
      a{
        text-decoration:underline;
      }
    }
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;
export default function Map() {
  return (
    <MapStyles>
    <div className="container">
      <div className="map__card">
        <h3 className="map__card__heading">
            Here is me
        </h3>
        <PText>
            Kathmandu, Nepal
        </PText>
        <a href="https://google.com" target="_blank" rel='noreferrer' >Open in Google Map</a>
      </div>
      </div>
    </MapStyles>
  )
}
