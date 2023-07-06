import React from 'react';
import InfoSection from '../../components/AboutData/AboutSection';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from '../AboutData/Data';




const About = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default About;