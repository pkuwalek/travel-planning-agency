import React, { useState } from 'react';
import './secondparallax.scss';
import Button from '../Button/Button';
import Modal from './../Modal/Modal';
import { Parallax } from 'react-parallax';
import backgroundFlatlay from './../../flatlay.jpg';

const SecondParallax = () => {
    const [ show, setShow ] = useState(false);
    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);

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
                        <Button content = "let's go!" handleClick = { openModal } />
                    </div>
                </div>
            </Parallax>
            <Modal 
                h1 = 'Hi there!'
                closeModal = { closeModal } 
                show = { show } 
            />
        </div>
    );
};

export default SecondParallax;