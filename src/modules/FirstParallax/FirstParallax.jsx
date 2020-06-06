import React from 'react';
import './firstparallax.scss';
import Button from '../Button/Button';
import { Parallax } from 'react-parallax';
import backgroundMaps from './../../maps.jpg';
import hatandglasses from './../../hatandglasses.jpg';

const FirstParallax = () => {

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
                          <Button content = 'Go there'></Button>
                      </div>
                  </div>
              </div>
          </Parallax>
      </div>
    );
  };
  
  export default FirstParallax;