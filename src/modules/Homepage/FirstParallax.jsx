import React, { useState } from 'react';
import './firstparallax.scss';
import Modal from './../Modal/Modal';
import Button from '../Button/Button';
import { Parallax } from 'react-parallax';
import backgroundMaps from './../../maps.jpg';
import hatandglasses from './../../hatandglasses.jpg';

const FirstParallax = () => {
    const [show, setShow] = useState(false);
    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);

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
                            <Button content = 'Go there' handleClick = { openModal } />
                            
                        </div>
                    </div>
                </div>
            </Parallax>
            <Modal 
                h1 = 'Hello!' 
                p1= 'You just clicked a completely useless button.'
                closeModal = { closeModal } 
                show = { show } 
            />
        </div>
    );
};
  
  export default FirstParallax;