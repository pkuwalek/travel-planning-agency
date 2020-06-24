import React from 'react';
import FirstParallax from './FirstParallax';
import MiddleHomeSection from './MiddleHomeSection';
import SecondParallax from './SecondParallax';
import Footer from './../Footer/Footer';

const Homepage = () => {

  return (
    <div>
        <FirstParallax />
        <MiddleHomeSection />
        <SecondParallax />
        <Footer />
    </div>
  );
};

export default Homepage;