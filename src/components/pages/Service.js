import React from 'react';
import Pricing from '../Pricing/Pricing';
import { styled } from 'styled-components';
import FeaturePic from '../../images/service.jpeg';

const FeatureContainer = styled.div`
background: linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
url(${FeaturePic});
height: 100vh;
max-height: 500px;
background-position: center;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #fff;
text-align: center;
padding: 0 1rem;

h1 {
font-size: clamp(3rem, 5vw, 5rem);
}

p {
margin-bottom: 1rem;
font-size: clamp(1rem, 3vw, 2rem);
}
`;

const FeatureButton = styled.div`
font-size: 1.4rem;
padding: 0.6rem 3rem;
border: none;
background: linear-gradient(90deg, #0b3e27, #197149);
color: #FFD700;
transition: 0.2s ease-out;

&:hover {
  color: #FFD700;
  background: #238a46;
  transition: 0.2s ease-out;
  cursor: pointer;
}
`;

const Service = () => {
return (
    <>
    {/* <h1 style={headingStyle}>Service</h1> */}
    <FeatureContainer>
      {/* <h1>Movement</h1> */}
      <p>Exquisite Swiss timepiece! </p>
      <p>Capturing perfect moments with elegance.</p>
      <FeatureButton>Get One Now</FeatureButton>
    </FeatureContainer>
    <Pricing />
    </>
  );
}

export default Service;
