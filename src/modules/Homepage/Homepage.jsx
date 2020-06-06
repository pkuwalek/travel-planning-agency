import React from 'react';
import FirstParallax from '../FirstParallax/FirstParallax';
import MiddleHomeSection from '../MiddleHomeSection/MiddleHomeSection';
import SecondParallax from '../SecondParallax/SecondParallax';

const Homepage = () => {

  return (
    <div>
        <FirstParallax />
        <MiddleHomeSection />
        <SecondParallax />
        <h1>| | |</h1>
    </div>
  );
};

export default Homepage;