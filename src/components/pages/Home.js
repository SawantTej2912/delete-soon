import React from 'react';
import Hero from '../../components/Hero';
import { SliderData } from '../../data/SliderData';
import InfoSection from '../../components/InfoSection';
import { InfoData, InfoDataTwo } from '../../data/InfoData';


function Home() {

    return(
    <>
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      {/* <InfoSection {...InfoDataTwo} reverse={true} /> */}

    </>
    );
}

export default Home;