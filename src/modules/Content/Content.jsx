import React, { useState } from 'react';
import './content.scss';
import { Parallax, Background } from 'react-parallax';
import backgroundMaps from './../../maps.jpg';
import backgroundGlobe from './../../globe.jpg';
import backgroundFlatlay from './../../flatlay.jpg';
import ipadcamera from './../../ipadcam.jpg';
import hatandglasses from './../../hatandglasses.jpg';

const Content = () => {

  return (
    <div>
        <Parallax 
            bgImage = {backgroundMaps}
            bgImageAlt = 'Maps'
            strength = {500}
        >
            <div className = 'parallaxImg'>
                <div className = 'inside'>
                    <img src = {hatandglasses} />
                    <div className = 'text'>
                        <p>Soufflé gummi bears icing topping liquorice apple pie. 
                            Candy pie brownie. Muffin halvah sugar plum sesame snaps apple pie. 
                            Jelly-o icing chocolate chocolate bar jujubes carrot cake. 
                            Pie chocolate bar sweet cake jelly chocolate lollipop jelly-o. 
                            Topping chupa chups caramels cupcake wafer cupcake jelly beans bonbon.
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>
        <h1>| | |</h1>
        <Parallax 
            bgImage = {backgroundFlatlay}
            bgImageAlt = 'Flatlay'
            strength = {500}
        >
            <div className = 'parallaxImg'>
                <div className = 'inside'>HTML inside the parallax</div>
            </div>
        </Parallax>
        <h1>| | |</h1>
    </div>
  );
};

export default Content;