import React from 'react';
import './secondparallax.scss';
import Button from '../Button/Button';
import { Parallax } from 'react-parallax';
import backgroundFlatlay from './../../flatlay.jpg';

const SecondParallax = () => {

  return (
    <div>
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
    </div>
  );
};

export default SecondParallax;