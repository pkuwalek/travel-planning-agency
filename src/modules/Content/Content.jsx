import React, { useState } from 'react';
import './content.scss';
import { Parallax, Background } from 'react-parallax';
import backgroundMaps from './../../maps.jpg';
import backgroundGlobe from './../../globe.jpg';

const Content = () => {

  return (
    <div>
        <Parallax 
            bgImage={backgroundGlobe}
            bgImageAlt="Globe"
            strength={500}
        >
            <div style={{ height: '500px' }}>
                <div className='inside'>HTML inside the parallax</div>
            </div>
        </Parallax>
        <h1>| | |</h1>
        <Parallax bgImage={backgroundMaps} blur={{ min: -1, max: 3 }}>
            <div style={{ height: 500 }}>
                <div className='inside'>Dynamic Blur</div>
            </div>
        </Parallax>
        <h1>| | |</h1>
        <Parallax bgImage={backgroundGlobe} strength={-100}>
            <div style={{ height: 500 }}>
                <div className='inside'>Reverse direction</div>
            </div>
        </Parallax>
        <h1>| | |</h1>
    </div>
  );
};

export default Content;