import React, { useState } from 'react';
import './homepage.scss';
import Button from '../Button/Button';
import { Parallax, Background } from 'react-parallax';
import backgroundMaps from './../../maps.jpg';
import backgroundFlatlay from './../../flatlay.jpg';
import hatandglasses from './../../hatandglasses.jpg';
import girl1 from './../../girl1.jpg';
import girl2 from './../../girl2.jpg';

const Homepage = () => {

  return (
    <div>
        <Parallax 
            bgImage = {backgroundMaps}
            bgImageAlt = 'Maps'
            strength = {500}
        >
            <div className = 'parallax-img'>
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
        <div className = 'middle-section'>
            <div className = 'middle-section-content'>
                <h1>Get to know us!</h1>
                <div className = 'images'>
                    <figure>
                        <img src = {girl1} />
                        <figcaption>Mia</figcaption>
                    </figure>
                    <figure>
                        <img src = {girl2} />
                        <figcaption>Elena</figcaption>
                    </figure>
                </div>
            </div>
        </div>
        <Parallax 
            bgImage = {backgroundFlatlay}
            bgImageAlt = 'Flatlay'
            strength = {500}
        >
            <div className = 'parallax-img'>
                <div className = 'inside-txt'>
                    <h1>Check our offer</h1>
                    <h2>Your dream holidays made for measure.</h2>
                    <Button content = "let's go!" />
                </div>
            </div>
        </Parallax>
        <h1>| | |</h1>
    </div>
  );
};

export default Homepage;