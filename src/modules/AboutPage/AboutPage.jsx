import React from 'react';
import './aboutpage.scss';
import ButtonReverse from './../ButtonReverse/ButtonReverse';
import friends from './../../friends.jpg';

const AboutPage = () => {
    return (
        <div className = 'main-container'>
            <div className = 'h1-container'>
                <h1>Mia & Elena</h1>
            </div>
            <div className = 'content-container'>
                <div className = 'content'>
                    <img src = {friends} />
                </div>
                <div className = 'content-p'>
                    <div className = 'p-wrapper'>
                        <p>
                            Soufflé gummi bears icing topping liquorice apple pie. 
                            Candy pie brownie. Muffin halvah sugar plum sesame snaps apple pie. 
                            Jelly-o icing chocolate chocolate bar jujubes carrot cake. 
                            Pie chocolate bar sweet cake jelly chocolate lollipop jelly-o. 
                            <br />
                            Topping chupa chups caramels cupcake wafer cupcake jelly beans bonbon.
                            Soufflé gummi bears icing topping liquorice apple pie. 
                            Candy pie brownie. Muffin halvah sugar plum sesame snaps apple pie. 
                            Jelly-o icing chocolate chocolate bar jujubes carrot cake. 
                            <br />
                            Pie chocolate bar sweet cake jelly chocolate lollipop jelly-o. 
                            Topping chupa chups caramels cupcake wafer cupcake jelly beans bonbon.
                        </p>
                    </div>
                    <div>
                        <ButtonReverse content = 'Come with us' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;