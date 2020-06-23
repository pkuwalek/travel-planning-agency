import React from 'react';
import './shoppage.scss';
import Navbar from './../Navbar/Navbar';
import ButtonReverse from './../ButtonReverse/ButtonReverse';
import { Parallax } from 'react-parallax';
import plane from './../../plane2.jpg';
import italy from './../../italy.jpg';
import road from './../../road.jpg';

const ShopPage = () => {
    return (
        <div>
            <Navbar />
            <Parallax            
            bgImage = {road}
            bgImageAlt = 'Road'
            strength = {500}
            >
                <div className = 'parallax-img'>
                    <div className = 'inside-txt'>
                        <h1>Check our offer</h1>
                        <h2>Your dream holidays made for measure.</h2>
                    </div>
                </div>
            </Parallax>
            <div className = 'first-middle-section'>
                <div className = 'middle-section-content'>
                    <h1>What can we do for you:</h1>
                    <h2>Preparation</h2>
                    <p>Topping chupa chups caramels cupcake wafer cupcake jelly beans bonbon.
                        Soufflé gummi bears icing topping liquorice apple pie. 
                        Candy pie brownie. Muffin halvah sugar plum sesame snaps apple pie. 
                        Jelly-o icing chocolate chocolate bar jujubes carrot cake.
                    </p>
                    <h2>Documents and Vaccines</h2>
                    <p>Topping chupa chups caramels cupcake wafer cupcake jelly beans bonbon.
                        Soufflé gummi bears icing topping liquorice apple pie. 
                        Candy pie brownie. Muffin halvah sugar plum sesame snaps apple pie. 
                        Jelly-o icing chocolate chocolate bar jujubes carrot cake.
                    </p>
                    <h2>Packing</h2>
                    <p>Topping chupa chups caramels cupcake wafer cupcake jelly beans bonbon.
                        Soufflé gummi bears icing topping liquorice apple pie. 
                        Candy pie brownie. Muffin halvah sugar plum sesame snaps apple pie. 
                        Jelly-o icing chocolate chocolate bar jujubes carrot cake.
                    </p>
                    <h2>Bookings</h2>
                    <p>Topping chupa chups caramels cupcake wafer cupcake jelly beans bonbon.
                        Soufflé gummi bears icing topping liquorice apple pie. 
                        Candy pie brownie. Muffin halvah sugar plum sesame snaps apple pie. 
                        Jelly-o icing chocolate chocolate bar jujubes carrot cake.
                    </p>
                    <h2>Rentals</h2>
                    <p>Topping chupa chups caramels cupcake wafer cupcake jelly beans bonbon.
                        Soufflé gummi bears icing topping liquorice apple pie. 
                        Candy pie brownie. Muffin halvah sugar plum sesame snaps apple pie. 
                        Jelly-o icing chocolate chocolate bar jujubes carrot cake.
                    </p>
                    <h2>Excursions</h2>
                    <p>Topping chupa chups caramels cupcake wafer cupcake jelly beans bonbon.
                        Soufflé gummi bears icing topping liquorice apple pie. 
                        Candy pie brownie. Muffin halvah sugar plum sesame snaps apple pie. 
                        Jelly-o icing chocolate chocolate bar jujubes carrot cake.
                    </p>
                    <h2>VIP package</h2>
                    <p>Topping chupa chups caramels cupcake wafer cupcake jelly beans bonbon.
                        Soufflé gummi bears icing topping liquorice apple pie. 
                        Candy pie brownie. Muffin halvah sugar plum sesame snaps apple pie. 
                        Jelly-o icing chocolate chocolate bar jujubes carrot cake.
                    </p>
                </div>
            </div>
            <Parallax
            bgImage = {italy}
            bgImageAlt = 'Italy'
            strength = {500}
            >
                <div className = 'parallax-img'>
                    <div className = 'inside-txt'>
                        <h1>Check our offer</h1>
                        <h2>Your dream holidays made for measure.</h2>
                    </div>
                </div>

            </Parallax>
            <div className = 'second-middle-section'>
                <h1>Schedule a meeting</h1>
                <h2>It's simple!</h2>
                <p>Topping chupa chups caramels cupcake wafer cupcake jelly beans bonbon.
                    Soufflé gummi bears icing topping liquorice apple pie. 
                    Candy pie brownie. Muffin halvah sugar plum sesame snaps apple pie. 
                    Jelly-o icing chocolate chocolate bar jujubes carrot cake.
                    Soufflé gummi bears icing topping liquorice apple pie. 
                    Candy pie brownie. Muffin halvah sugar plum sesame snaps apple pie. 
                    Jelly-o icing chocolate chocolate bar jujubes carrot cake.
                </p>
                <ButtonReverse content = 'get started' />
            </div>
            <Parallax
            bgImage = {plane}
            bgImageAlt = 'Italy'
            strength = {500}
            >
                <div className = 'parallax-img'>
                    <div className = 'inside-txt'>
                        <h1>Ready to go?</h1>
                        <h2>Your dream holidays made for measure.</h2>
                    </div>
                </div>
            </Parallax>
        </div>
    )
}

export default ShopPage;