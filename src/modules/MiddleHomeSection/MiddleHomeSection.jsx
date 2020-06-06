import React from 'react';
import './middlehomesection.scss';
import girl1 from './../../girl1.jpg';
import girl2 from './../../girl2.jpg';

const MiddleHomeSection = () => {

  return (
    <div>
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
    </div>
  );
};

export default MiddleHomeSection;